using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class MeteoriteGenerator : MonoBehaviour {
    
    public GameObject[] Train;

    //生成時間
    //最小値
    [Range(1f, 3f)]
    public float minTime = 1f;
    //最大値
    [Range(3f, 10f)]
    public float maxTime = 3f;

    //生成場所
    //X座標
    [Header("Set X Position Min and Max")]
    [Range(-10f, -5f)]
    public float xMinPosition = -10f;
    [Range(5f, 10f)]
    public float xMaxPosition = 10f;
    //Y座標
    [Header("Set Y Position Min and Max")]
    [Range(-10f, -5f)]
    public float yMinPosition = 0f;
    [Range(5f, 20f)]
    public float yMaxPosition = 10f;
    //Z座標
    [Header("Set Z Position Min and Max")]
    [Range(70f, 100f)]
    public float zMinPosition = 70f;
    [Range(110f, 150f)]
    public float zMaxPosition = 100f;

    //敵生成時間間隔
    private float interval;
    //経過時間
    private float time = 0f;  



    void Start () {
        //時間間隔を決定する
        interval = GetRandomTime();

    }

    // Update is called once per frame
    void Update () {
        //時間計測
        time += Time.deltaTime;

        //経過時間が生成時間になったとき(生成時間より大きくなったとき)
        if (time > interval)
        {

            int meteo = Random.Range(0, Train.Length);
            //meteoriteをインスタンス化する(生成する)
            GameObject meteorite = Instantiate(Train[meteo]);
            //生成したmeteoriteの位置をランダムに設定する
            meteorite.transform.position = GetRandomPosition();
            //経過時間を初期化して再度時間計測を始める
            time = 0f;
            //次に発生する時間間隔を決定する
            interval = GetRandomTime();

        }
    }

    //ランダムな時間を生成する関数
    private float GetRandomTime()
    {
        return Random.Range(minTime, maxTime);
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

}
