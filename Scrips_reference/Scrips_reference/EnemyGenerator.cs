using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class EnemyGenerator : MonoBehaviour
{

    [Header("Set Enemy Prefab")]
    //敵プレハブ
    public GameObject enemyPrefab;
    public GameObject enemyBigPrefab;
    public GameObject enemyLittlePrefab;
    [Header("Set Interval Min and Max")]
    //時間間隔の最小値
    public float minTime;
    public float minTimeB;
    public float minTImeL;
    //時間間隔の最大値
    public float maxTime;
    public float maxTimeB;
    public float maxTimeL;

    [Header("Set X Position Min and Max")]
    //X座標の最小値
    public float xMinPosition = -10f;
    public float xMinPositionB = -5f;
    //X座標の最大値
    public float xMaxPosition = 10f;
    public float xMaxPositionB = 5f;
    [Header("Set Y Position Min and Max")]
    //Y座標の最小値
    public float yMinPosition = 0f;
    public float yMinPositionB = 100f;
    //Y座標の最大値
    public float yMaxPosition = 10f;
    public float yMaxPositionB = 150f;
    [Header("Set Z Position Min and Max")]
    //Z座標の最小値
    public float zMinPosition = 140f;
    public float zMinPositionB = 170f;
    //Z座標の最大値
    public float zMaxPosition = 180f;
    public float zMaxPositionB = 200f;


    //敵生成時間間隔
    private float interval;
    private float intervalB;
    private float intervalL;

    //経過時間
    private float time = 0f;
    private float timeB = 0f;
    private float timeL = 0f;

    public GameController gaCo;

    // Start is called before the first frame update
    void Start()
    {
        gaCo = GameObject.Find("GameController").GetComponent<GameController>();

        GameStart();
        Debug.Log("gamestartの実行");

        //時間間隔を決定する
        interval = GetRandomTime();
        intervalB = GetRandomTimeB();
        intervalL = GetRandomTimeL();
    }

    // Update is called once per frame
    void Update()
    {
        //時間計測
        time += Time.deltaTime;
        timeB += Time.deltaTime;
        timeL += Time.deltaTime;

        //経過時間が生成時間になったとき(生成時間より大きくなったとき)
        if (time > interval)
        {
            //enemyをインスタンス化する(生成する)
            GameObject enemy = Instantiate(enemyPrefab);
            //生成した敵の位置をランダムに設定する
            enemy.transform.position = GetRandomPosition();
            //生成した敵がランダムで横方向にカーブする
            float enemyMove = Random.Range(-5.0f, 5.0f);
            enemy.GetComponent<Rigidbody>().AddForce(new Vector3(enemyMove, 0, 0), ForceMode.VelocityChange);
            //経過時間を初期化して再度時間計測を始める
            time = 0f;
            //次に発生する時間間隔を決定する
            interval = GetRandomTime();
        }

        if (timeB > intervalB)
        {
            //enemyをインスタンス化する(生成する)
            GameObject enemyBig = Instantiate(enemyBigPrefab);
            //生成した敵の位置をランダムに設定する
            enemyBig.transform.position = GetRandomPositionB();
            //生成した敵がランダムで横方向にカーブする
            float enemyBigMove = Random.Range(-5.0f, 5.0f);
            enemyBig.GetComponent<Rigidbody>().AddForce(new Vector3(enemyBigMove, 0, 0), ForceMode.VelocityChange);
            //経過時間を初期化して再度時間計測を始める
            timeB = 0f;
            //次に発生する時間間隔を決定する
            intervalB = GetRandomTimeB();
        }

        if (timeL > intervalL)
        {
            //enemyをインスタンス化する(生成する)
            GameObject enemyLittle = Instantiate(enemyLittlePrefab);
            //生成した敵の位置をランダムに設定する
            enemyLittle.transform.position = GetRandomPosition();
            //生成した敵がランダムで横方向にカーブする
            float enemyLittleMove = Random.Range(-5.0f, 5.0f);
            enemyLittle.GetComponent<Rigidbody>().AddForce(new Vector3(enemyLittleMove, 0, 0), ForceMode.VelocityChange);
            //経過時間を初期化して再度時間計測を始める
            timeL = 0f;
            //次に発生する時間間隔を決定する
            intervalL = GetRandomTimeL();
        }
    }

    public void GameStart()
    {
        if (gaCo.firstSte)
        {
            minTime = 2f;
            maxTime = 5f;
            minTimeB = 20f;
            maxTimeB = 25f;
            minTImeL = 50f;
            maxTimeL = 100f;
        }
        if (gaCo.secondSte)
        {
            minTime = 1.5f;
            maxTime = 4f;
            minTimeB = 15f;
            maxTimeB = 20f;
            minTImeL = 40f;
            maxTimeL = 80f;
        }
        if (gaCo.thirdSte)
        {
            minTime = 1f;
            maxTime = 3f;
            minTimeB = 10f;
            maxTimeB = 15f;
            minTImeL = 30f;
            maxTimeL = 60f;
        }
    }

    //ランダムな時間を生成する関数
    private float GetRandomTime()
    {
        return Random.Range(minTime, maxTime);
    }
    private float GetRandomTimeB()
    {
        return Random.Range(minTimeB, maxTimeB);
    }
    private float GetRandomTimeL()
    {
        return Random.Range(minTImeL, maxTimeL);
    }

    //ランダムな位置を生成する関数
    private Vector3 GetRandomPosition()
    {
        //それぞれの座標をランダムに生成する
        float x = Random.Range(xMinPosition, xMaxPosition);
        float y = Random.Range(yMinPosition, yMaxPosition);
        float z = Random.Range(zMinPosition, zMaxPosition);

        //Vector3型のPositionを返す
        return new Vector3(x, y, z);
    }
    private Vector3 GetRandomPositionB()
    {
        float x = Random.Range(xMinPositionB, xMaxPositionB);
        float y = Random.Range(yMinPositionB, yMaxPositionB);
        float z = Random.Range(zMinPositionB, zMaxPositionB);

        return new Vector3(x, y, z);
    }

}