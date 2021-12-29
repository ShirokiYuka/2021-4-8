using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class EnemyLittleChase : MonoBehaviour {

    public GameObject targetPlayer;

    [Header("Set DethEnemy Prefab")]
    public GameObject dethEnemyPrefab3;
    [Header("Set AttackEnemy Prefab")]
    public GameObject attackEnemyPrefab3;

    public bool addDamage;

    //Rigidbodyを入れる変数
    Rigidbody rigid;
    //速度
    private Vector3 velocity;
    //初期位置
    private Vector3 position;
    //加速度
    public Vector3 acceleration;
    //ターゲッティング
    public Transform target;
    //着弾時間
    public float period;

    public GameObject hitEffect;

    public GameController gaCo;

    // Use this for initialization
    void Start()
    {
        gaCo = GameObject.Find("GameController").GetComponent<GameController>();

        GameStart();

        //初期位置をポジションに
        position = transform.position;
        target = targetPlayer.transform;
        //rigidbody取得
        rigid = this.GetComponent<Rigidbody>();

    }

    // Update is called once per frame
    void Update()
    {
        acceleration = Vector3.zero;

        //ターゲットと自分自身の差
        var diff = target.position - transform.position;

        //加速度
        acceleration += (diff - velocity * period) * 8f / (period * period);

        //加速度が一定以上だと追尾を弱くする
        if (acceleration.magnitude > 100f)
        {
            acceleration = acceleration.normalized * 100f;
        }

        //着弾時間を徐々に減らしていく
        period -= Time.deltaTime;

        //速度の計算
        velocity += acceleration * Time.deltaTime;

        if (gaCo.isDead == true)
        {
            Destroy(gameObject);
            //Debug.Log("残党が削除されました");
        }
        if (gaCo.isGoal == true)
        {
            Destroy(gameObject);
            //Debug.Log("残党が削除されました");
        }
    }

    public void OnCollisionEnter(Collision collision)
    {
        if (collision.gameObject.CompareTag("Bullet"))
        {
                //自身を削除
                Destroy(gameObject);

                GameObject dethEnemy = Instantiate(dethEnemyPrefab3);

                //引数オブジェクト（弾）を削除
                Destroy(collision.gameObject);

                GenerateHitEffect();
        }
        else if (collision.gameObject.CompareTag("BulletPos"))
        {
            Destroy(gameObject);

            GameObject attackEnemy = Instantiate(attackEnemyPrefab3);

            //エフェクトを発生させる
            GenerateHitEffect();

            addDamage = true;

            AddDamageCo();
        }
        else if (collision.gameObject.CompareTag("Meteorite"))
        {
            //
        }else if (collision.gameObject.CompareTag("Enemy"))
        {
            //
        }

    }

    public void GameStart()
    {
        if (gaCo.firstSte)
        {
            period = 2.5f;
        }
        if (gaCo.secondSte)
        {
            period = 2f;
        }
        if (gaCo.thirdSte)
        {
            period = 1f;
        }
    }

    public void AddDamageCo()
    {
        if (addDamage == true)
        {
            gaCo.AddToBigDamage();
            addDamage = false;
        }
    }

    public void GenerateHitEffect()
    {
        //エフェクトを生成する
        GameObject effect = Instantiate(hitEffect) as GameObject;
        //エフェクトが発生する場所を決定する(オブジェクトの場所)
        effect.transform.position = gameObject.transform.position;
    }

    void FixedUpdate()
    {
        // 移動処理
        rigid.MovePosition(transform.position + velocity * Time.deltaTime);
    }
}
