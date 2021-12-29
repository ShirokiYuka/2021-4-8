using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.SceneManagement;

public class GameController : MonoBehaviour {
    //テキスト
    //倒した敵の数を表示するテキスト
    public UnityEngine.UI.Text ScoreText;
    //結果を表示するテキスト
    public UnityEngine.UI.Text ClearText;
    //aimtext
    public UnityEngine.UI.Text AimText;

    //ゲームクリア時に無効にするオブジェクト -> "AmongPlayingObjects"
    public GameObject enemyGene;
    public GameObject canonCO;

    //エフェクト管理
    public GameObject ppB;
    public GameObject ppC;
    public GameObject ppG;

    //HP管理
    [Tooltip("HPの初期値")]
    //maxHo
    public int mHp = 10;
    //現在のHp
    public int pHp;
    //HpBar=Slider
    public Slider hpBar;
    public int damage;
    //FixedUpdate
    public int dmCount;

    //SpGauge管理
    [Tooltip("ゲージの管理")]
    //maxGAG
    public int mSpg = 10;
    //現在のGag
    public int pSpg;
    //SPgauge=Slider
    public Slider spgBar;
    //隕石撃墜数
    public int meteCnt;

    public int useGauge;

    public int clearCount;
    //フラグ
    public bool firstSte;
    public bool secondSte;
    public bool thirdSte;
    public bool plProtect = false;
    public bool spAttack = false;
    public bool spEffect = false;
    public bool isGoal = false;
    public bool isDead = false;
    
    public void Start()
    {
        //ClearTextの最初のステータス
        ClearText.enabled = false;
        //AimText最初のステータス
        AimText.enabled = true;

        //エフェクトの最初のステータス
        ppB.SetActive(true);
        ppC.SetActive(false);
        ppG.SetActive(false);

        //"AmongPlayingObgects"の最初のステータス
        enemyGene.SetActive(true);
        canonCO.SetActive(true);

        //HP管理
        //Sliderを満タンにする
        hpBar.value = 1;
        //現在のHPを最大HPと同じに
        pHp = mHp;

        //SpG管理
        //Sliderを空にする
        spgBar.value = 0;
        //現在のSpGaugeを0にする
        pSpg = 0;
        meteCnt = 0;

        GameStart();
    }

    //HP管理
    //ダメージ処理
    public void AddToDamage()
    {
        if (dmCount <= 0)
        {
            //ダメージ
            damage = 0;

            damage++;

            plProtect = true;
        }
        //現在のHPからダメージを引く
        pHp = pHp - damage;

        hpBar.value = (float)pHp / (float)mHp;

        HpbarValue();
    }
    
    public void AddToBigDamage()
    {
        if (dmCount <= 0)
        {
            //ダメージ
            damage = 0;

            damage += 3;

            plProtect = true;
        }
        //現在のHPからダメージを引く
        pHp = pHp - damage;

        hpBar.value = (float)pHp / (float)mHp;

        HpbarValue();
    }

    public void AddToGauge()
    {
        int spGauge = 0;

        spGauge++;
        meteCnt++;

        MeteoriteHits();

        pSpg = pSpg + spGauge;

        spgBar.value = (float)pSpg / (float)mSpg;

        if(pSpg >= 10)
        {
            GaugeMax();
            spAttack = true;
            ppC.SetActive(true);
            //Debug.Log("SP ATTACK TIME");
        }
    }

    public void HpbarValue()
    {
        if (hpBar.value <= 0.7f)
        {
            DamageLogLittle();
        }
        if (hpBar.value <= 0.5f)
        {
            ppG.SetActive(true);
            DamageLogMidle();
        }
        if (hpBar.value <= 0.2f)
        {
            DamageLogLarge();
        }
        if (pHp <= 0)
        {
            ClearText.enabled = true;
            AimText.enabled = false;

            ClearText.text = ("GAME OVER");

            if (isDead == false)
            {
                GameOver();
            }
            isDead = true;
        }
    }

    public void Update()
    {
        //倒した敵の数をタグを使って数える
        int count = GameObject.FindGameObjectsWithTag("DethEnemy1").Length;
        int count2 = GameObject.FindGameObjectsWithTag("DethEnemy2").Length;
        int count3 = GameObject.FindGameObjectsWithTag("DethEnemy3").Length;
        //倒せなかった敵の数
        int dm1 = GameObject.FindGameObjectsWithTag("AttackEnemy1").Length;
        int dm2 = GameObject.FindGameObjectsWithTag("AttackEnemy2").Length;
        int dm3 = GameObject.FindGameObjectsWithTag("AttackEnemy3").Length;

        //倒した敵の数を書き込む
        ScoreText.text = ("SCORE " + (((count * 7) + (count2 * 15) + (count3 * 30) + (meteCnt * 3)) - ((dm1 * 2) + (dm2 * 10) + (dm3 * 20))));
        //Debug.Log("倒した敵：" + count);

        //クリアまたは死んだ時、"AmongPlayingObjects"のステータスをfalseに
        if(isDead || isGoal)
        {
            enemyGene.SetActive(false);
            canonCO.SetActive(false);
        }
        if (isDead && Input.GetKeyDown("space"))
        {
            Restart();
        }
        //倒した敵の数が数字以上の時、
        if (count >= clearCount)
        {
            //ClearTextのステータスをtrueに
            ClearText.enabled = true;

            AimText.enabled = false;

            ClearText.text = ("Clear");

            if (isGoal == false)
            {
                GameClear();
            }

            isGoal = true;
            //Debug.Log("敵を倒した");
        }
        if(isGoal && Input.GetKeyDown("space"))
        {
            NextSteage();
        }
    }

    public void FixedUpdate()
    {
        dmCount--;
        if (plProtect == true)
        {
            dmCount = 25;

            plProtect = false;
        }
        if(spAttack == true) {
            useGauge++;
            if (useGauge >= 25)
            {
                useGauge = 0;
                pSpg--;

                spgBar.value = (float)pSpg / (float)mSpg;
            }
            if(pSpg <= 0)
            {
                spAttack = false;
                ppC.SetActive(false);
                //Debug.Log("NORMAL ATTACK TIME");
            }
        }
    }

    //リスタート処理
    public void Restart()
    {
        if (firstSte)
        {
            SceneManager.LoadScene("Steage1");
        }
        if (secondSte)
        {
            SceneManager.LoadScene("Steage2");
        }
        if (thirdSte)
        {
            SceneManager.LoadScene("Steage3");
        }
    }
    //次のSteage2へ
    public void NextSteage()
    {
        if (SceneManager.GetActiveScene().name == "Steage1")
        {
            SceneManager.LoadScene("Steage2");
        }
        if (SceneManager.GetActiveScene().name == "Steage2")
        {
            SceneManager.LoadScene("Steage3");
        }
        if (SceneManager.GetActiveScene().name == "Steage3")
        {
            SceneManager.LoadScene("NewSteage1");
        }
    }

    //ログ管理
    public void GameStart()
    {
        if (SceneManager.GetActiveScene().name == "Steage1")
        {
            firstSte = true;
            clearCount = 10;
        }
        if (SceneManager.GetActiveScene().name == "Steage2")
        {
            secondSte = true;
            clearCount = 20;
        }
        if (SceneManager.GetActiveScene().name == "Steage3")
        {
            thirdSte = true;
            clearCount = 30;
        }
        Debug.Log("[System]　目標撃墜数：" + clearCount);
        Debug.Log("[Operator]　掃討開始。");
    }
    public void GameClear()
    {
        Debug.Log("[Operator]　殲滅成功。");
        Debug.Log("[Operator]　敵沈黙。");
        Debug.Log("[Operator]　次に備えよ。");
    }
    public void EnemyHits()
    {
        Debug.Log("[System]　殲滅率：計算中");
        Debug.Log("[System]　次弾装填");
    }
    public void MeteoriteHits()
    {
        Debug.Log("[System]　隕石の衝突を回避");
        Debug.Log("[Operator]　殲滅の続行。");
    }
    public void GaugeMax()
    {
        Debug.Log("[System]　エネルギー放出開始");
        Debug.Log("[System]　弾数：増加");
        Debug.Log("[System]　忠告：エネルギーの使いすぎ");
    }
    public void DamageLogLittle()
    {
        if (hpBar.value > 0.6f)
        {
            Debug.Log("[System]　ネットワーク：不安定");
            Debug.Log("[System]　機体損傷：ＬＥＶＥＬ3");
        }
    }
    public void DamageLogMidle()
    {
        if (hpBar.value > 0.4f)
        {
            Debug.Log("[System]　機体安定度：中");
            Debug.Log("[System]　機体損傷：ＬＥＶＥＬ6");
        }
    }
    public void DamageLogLarge()
    {
        if (hpBar.value > 0.1f)
        {
            Debug.Log("[System]　基地との通信切断");
            Debug.Log("[System]　パイロットの生命危機");
            Debug.Log("[System]　機体損傷：ＬＥＶＥＬ9");
            Debug.Log("[System]　推奨：速やかな避難");
        }
    }
    public void GameOver()
    {
        Debug.Log("[System]　機体安定度：低");
        Debug.Log("[System]　本機は墜落中");
        Debug.Log("[System]　パイロットの生存率：計算中");
        Debug.Log("[System]     ・   ");
        Debug.Log("[System]     ・   ");
        Debug.Log("[System]     ・   ");
    }
}
