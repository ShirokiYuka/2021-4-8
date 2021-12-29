using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BulletBreaker : MonoBehaviour {
	
	// Update is called once per frame
	void Update () {
        if (gameObject.transform.position.z >= 100f)
        {
            Destroy(gameObject);
            //Debug.Log("BULLET_IS_FARAWAY");
        }

    }
}
