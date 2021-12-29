using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class EnemyChase : MonoBehaviour
{
    public GameObject targetPlayer;

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
        acceleration += (diff - velocity * period) * 5f / (period * period);

        //加速度が一定以上だと追尾を弱くする
        if (acceleration.magnitude > 100f)
        {
            acceleration = acceleration.normalized * 100f;
        }

        //着弾時間を徐々に減らしていく
        period -= Time.deltaTime;

        //速度の計算
        velocity += acceleration * Time.deltaTime;

        if(gaCo.isDead == true)
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

    public void GameStart()
    {
        if (gaCo.firstSte)
        {
            period = 3f;
        }
        if (gaCo.secondSte)
        {
            period = 2.8f;
        }
        if (gaCo.thirdSte)
        {
            period = 1.5f;
        }
    }

    void FixedUpdate()
    {
        // 移動処理
        rigid.MovePosition(transform.position + velocity * Time.deltaTime);
    }


    

}
