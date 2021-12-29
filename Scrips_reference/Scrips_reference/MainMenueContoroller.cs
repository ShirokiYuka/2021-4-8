using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.SceneManagement;


public class MainMenueContoroller : MonoBehaviour {


    public UnityEngine.UI.Text title;
    public UnityEngine.UI.Text startText;
    public GameObject startPanel;
    public GameObject howToPanel;
    public UnityEngine.UI.Button Button_Mode1;
    public UnityEngine.UI.Button Button_Mode2;

    public float speed = 1.0f;
    public float time;


	// Use this for initialization
	void Start () {

        title.enabled = true;
        startText.enabled = true;
        startPanel.SetActive(false);
        howToPanel.SetActive(false);

        title.text = ("SPACE SHOOTING");
        startText.text = ("- Press Space Button -");
	}
	
	// Update is called once per frame
	void Update () {

        startText.color = GetAlphaColor(startText.color);

        if (Input.GetKeyDown(KeyCode.Space))
        {
            SelectGame();
        }
        if (howToPanel.activeSelf) {
            startPanel.SetActive(false);
            if (Input.GetKeyDown("return"))
            {
                Debug.Log("sadou");
                howToPanel.SetActive(false);
                startPanel.SetActive(true);
            }
        }
    }

    public void SelectGame()
    {
        startText.enabled = false;
        title.enabled = false;
        startPanel.SetActive(true);

    }

    Color GetAlphaColor (Color color)
    {
        time += Time.deltaTime * 3.0f * speed;
        color.a = Mathf.Sin(time) * 0.5f + 0.5f;

        return color;
        
    }
    

    
}
