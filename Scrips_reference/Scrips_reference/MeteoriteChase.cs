using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class MeteoriteChase : MonoBehaviour {


    //Rigidbodyを入れる変数
    Rigidbody rigid;
    //速度
    private Vector3 velocity;
    //初期位置
    private Vector3 position;

    //倒した時のエフェクト
    public GameObject hitEffect;

    public bool addGauge;
    public GameController gaCo;

    // Use this for initialization
    void Start()
    {
        //初期位置をポジションに
        position = transform.position;
        //rigidbody取得
        rigid = this.GetComponent<Rigidbody>();

        gaCo = GameObject.Find("GameController").GetComponent<GameController>();
    }

    public void OnCollisionEnter(Collision collision)
    {
        addGauge = false;
        if (collision.gameObject.CompareTag("Bullet"))
        {
            //自身を削除
            Destroy(gameObject);
            //引数オブジェクト（弾）を削除
            Destroy(collision.gameObject);
            //エフェクトを呼ぶ
            GenerateHitEffect();
            addGauge = true;
            addGaugeCo();

        }else if (collision.gameObject.CompareTag("BulletPos"))
        {
            Debug.Log("[隕石がぶつかる音：ゴンッ！]");
        }
    }

    // Update is called once per frame
    void Update()
    {
        if (transform.position.x <= 3f && transform.position.x >= -3f)
        {
            if (transform.position.y <= 0f && transform.position.y >= -2f)
            {
                Destroy(gameObject);
                //Debug.Log("DESTROY METEORITE");
            }
        }
        //速度の計算
        velocity = new Vector3(0, 0, -20);

        if (gameObject.transform.position.z <= -100f)
        {
            Destroy(gameObject);
        }
    }

    public void GenerateHitEffect()
    {
        //エフェクトを生成する
        GameObject effect = Instantiate(hitEffect) as GameObject;
        //エフェクトが発生する場所を決定する(オブジェクトの場所)
        effect.transform.position = gameObject.transform.position;
    }

    public void addGaugeCo()
    {
        if(addGauge == true)
        {
            gaCo.AddToGauge();
        }
    }

    void FixedUpdate()
    {
        // 移動処理
        rigid.MovePosition(transform.position + velocity * Time.deltaTime);
    }
}
