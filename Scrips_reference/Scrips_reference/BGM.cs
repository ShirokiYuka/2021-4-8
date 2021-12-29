using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class BGM : MonoBehaviour {

    public bool DontDestroyEnabled = true;


	// Use this for initialization
	void Start () {
        DontDestroyOnLoad(this);
    }

    // Update is called once per frame
    void Update () {
        if (SceneManager.GetActiveScene().name == "NewSteage1") Destroy(gameObject);
	}
}
