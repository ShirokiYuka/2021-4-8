using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.SceneManagement;

public class NewSteage1Button : MonoBehaviour {

    public GameObject howToPlay;

    public void OnClickNewSteage1Button()
    {
        howToPlay.SetActive(true);
    }

}
