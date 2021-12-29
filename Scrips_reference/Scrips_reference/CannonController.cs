using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CannonController : MonoBehaviour
{
    //bulletプレハブ
    public GameObject bullet;
    //弾が生成されるポジションを保有するゲームオブジェクト
    public GameObject bulletPos;
    public GameObject bulletPosLeft;
    public GameObject bulletPosRight;
    //弾のスピード
    public float speed = 4000f;

    //
    public float interval = 0.3f;
    private float timer = 0.0f;

    public GameController gaCo;

    private void Start()
    {
        gaCo = GameObject.Find("GameController").GetComponent<GameController>();
        /*
        bulletPos.SetActive(false);
        bulletPosLeft.SetActive(false);
        bulletPosRight.SetActive(false);
        */
    }

    // Update is called once per frame
    void Update()
    {
        if(gaCo.spAttack == true)
        {
            /*
            bulletPos.SetActive(true);
            bulletPosLeft.SetActive(true);
            bulletPosRight.SetActive(true);
            */

            SPAttack();
        }
        if(gaCo.spAttack == false)
        {
            /*
            bulletPos.SetActive(true);
            bulletPosLeft.SetActive(false);
            bulletPosRight.SetActive(false);
            */

            NomalAttack();
        }

    }

    public void NomalAttack()
    {
        if (Input.GetKeyDown(KeyCode.Space))
        {
            speed = 3000f;
            CreatedBullets();
        }
    }

    public void SPAttack()
    {
        if (Input.GetKey(KeyCode.Space) && timer <= 0.0f)
        {
            speed = 4000f;
            CreatedBullets();
            CreatedBulletLeft();
            CreatedBulletRight();

            timer = interval;

            //Debug.Log("タイマーリセット");
        }
        if (timer > 0.0f)
        {
            timer -= Time.deltaTime;
        }
    }

    public void CreatedBullets()
    {
        //ballをインスタンス化して発射
        GameObject createdBullet = Instantiate(bullet) as GameObject;
        createdBullet.transform.position = bulletPos.transform.position;

        //発射ベクトル
        Vector3 force;
        //発射の向きと速度を決定
        force = bulletPos.transform.forward * speed;
        // Rigidbodyに力を加えて発射
        createdBullet.GetComponent<Rigidbody>().AddForce(force);

    }

    public void CreatedBulletLeft()
    {
        GameObject createdBulletLeft = Instantiate(bullet) as GameObject;
        createdBulletLeft.transform.position = bulletPosLeft.transform.position;

        Vector3 force;
        force = bulletPosLeft.transform.forward * speed;
        createdBulletLeft.GetComponent<Rigidbody>().AddForce(force);

    }
    public void CreatedBulletRight()
    {
        GameObject createdBulletRight = Instantiate(bullet) as GameObject;
        createdBulletRight.transform.position = bulletPosRight.transform.position;

        Vector3 force;
        force = bulletPosRight.transform.forward * speed;
        createdBulletRight.GetComponent<Rigidbody>().AddForce(force);

    }


}