using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class HitController : MonoBehaviour
{
    //倒したときのエフェクト
    public GameObject breakEffect;

    [Header("Set DethEnemy Prefab")]
    public GameObject dethEnemyPrefab;
    [Header("Set AttackEnemy Prefab")]
    public GameObject attackEnemyPrefab;

    public bool addDamage;
    public GameController gaCo;

    public void Start()
    {
        gaCo = GameObject.Find("GameController").GetComponent<GameController>();
        addDamage = false;
    }

    //当たり判定メソッド
    public void OnCollisionEnter(Collision collision)
    {
        //衝突したオブジェクトがBullet(大砲の弾)だったとき
               if (collision.gameObject.CompareTag("Bullet"))
        {
            //敵(スクリプトがアタッチされているオブジェクト自身)を削除
            Destroy(gameObject);

            GameObject dethEnemy = Instantiate(dethEnemyPrefab);

            //弾(引数オブジェクト)を削除
            Destroy(collision.gameObject);

            //エフェクトを発生させる
            GenerateEffect();

            gaCo.EnemyHits();
            //Debug.Log("敵と弾が衝突しました！");
        }
               else if (collision.gameObject.CompareTag("Meteorite"))
        {
            Debug.Log("[敵の驚いた声：うわあ！]");
        }
               else if(collision.gameObject.CompareTag("BulletPos"))
        {

            Destroy(gameObject);

            GameObject attackEnemy = Instantiate(attackEnemyPrefab);

            //エフェクトを発生させる
            GenerateEffect();

            addDamage = true;

            AddDamageCo();

            //Debug.Log("敵が衝突しました！");
            //Debug.Log("ダメージが入った！");

        }else if (collision.gameObject.CompareTag("Enemy"))
        {
            //何も起こらない
        }

    }

    //エフェクトを生成する
    public void GenerateEffect()
    {
        //エフェクトを生成する
        GameObject effect = Instantiate(breakEffect) as GameObject;
        //エフェクトが発生する場所を決定する(敵オブジェクトの場所)
        effect.transform.position = gameObject.transform.position;
    }

    public void AddDamageCo()
    {
        if(addDamage == true)
        {
            gaCo.AddToDamage();
            addDamage = false;
        }
    }
}