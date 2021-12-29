﻿using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.SceneManagement;

public class EndingText : MonoBehaviour {
    public Text mainText;
    public Text nameText;

    public GameObject nextPageIcon;

    public float captionSpeed = 0.1f;

    public const char SEPARATE_MAIN_START = '「';
    public const char SEPARATE_MAIN_END = '」';
    public const char SEPARATE_PAGE = '&';

    public Queue<char> _charQueue;
    public Queue<string> _pageQueue;

    public string _text = "a「」&a「【環境の音：無音】」&a「【System】敵の殲滅を確認」&unity「【Operator】お疲れさまでした」&a「【Operator】これでゲームは終わりです」&unity「【Operator】こんなことに時間を費やした気分はどうですか？」&unity「【Operator】プログラムはこれで終了です」&unity「【System】プログラム終了のサインを確認」&unity「【System】動作を停止します」&unity「【Program】ボタンを押すと終了します」";



    private Queue<char> SeparateString(string str)
    {
        char[] chars = str.ToCharArray();
        Queue<char> charQueue = new Queue<char>();

        foreach (char c in chars) charQueue.Enqueue(c);
        return charQueue;
    }

    private Queue<string> SeparateString(string str, char sep)
    {
        string[] strs = str.Split(sep);
        Queue<string> queue = new Queue<string>();
        foreach (string l in strs) queue.Enqueue(l);
        return queue;
    }

    private void Init()
    {
        _pageQueue = SeparateString(_text, SEPARATE_PAGE);
        ShowNextPage();
    }

    private bool ShowNextPage()
    {
        if (_pageQueue.Count <= 0) return false;
        nextPageIcon.SetActive(false);
        ReadLine(_pageQueue.Dequeue());
        return true;
    }

    public bool OutputChar()
    {
        if (_charQueue.Count <= 0)
        {
            nextPageIcon.SetActive(true);
            return false;
        }
        mainText.text += _charQueue.Dequeue();
        return true;
    }

    public void ReadLine(string text)
    {
        string[] ts = text.Split(SEPARATE_MAIN_START);
        string name = ts[0];
        string main = ts[1].Remove(ts[1].LastIndexOf(SEPARATE_MAIN_END));

        nameText.text = name;
        mainText.text = "";
        _charQueue = SeparateString(main);

        StartCoroutine(ShowChars(captionSpeed));
    }

    public void Start()
    {
        Init();
    }

    public IEnumerator ShowChars(float wait)
    {
        while (OutputChar())
            yield return new WaitForSeconds(wait);
        yield break;
    }

    public void OutputAllChar()
    {
        StopCoroutine(ShowChars(captionSpeed));
        while (OutputChar()) ;
        nextPageIcon.SetActive(true);
    }

    public void OnClick()
    {
        if (_charQueue.Count > 0) OutputAllChar();
        else
        {
            if (!ShowNextPage())
                SceneManager.LoadScene("MainMenue");
                //UnityEditor.EditorApplication.isPlaying = false;
        }
    }

    public void Update()
    {
        if (Input.GetKeyDown("space")) OnClick();
    }
}
