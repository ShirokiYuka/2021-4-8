/***
This is free and unencumbered software released into the public domain.
Anyone is free to copy, modify, publish, use, compile, sell, or
distribute this software, either in source code form or as a compiled
binary, for any purpose, commercial or non-commercial, and by any
means.
In jurisdictions that recognize copyright laws, the author or authors
of this software dedicate any and all copyright interest in the
software to the public domain. We make this dedication for the benefit
of the public at large and to the detriment of our heirs and
successors. We intend this dedication to be an overt act of
relinquishment in perpetuity of all present and future rights to this
software under copyright law.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
For more information, please refer to <https://unlicense.org>
***/

var startDiv = document.getElementById('startDiv');
var startButton = document.getElementById('start');

const felicaA1Event = new CustomEvent('felicaA1', { detail: 'A1' });
const felicaA2Event = new CustomEvent('felicaA2', { detail: 'A2' });
const felicaA3Event = new CustomEvent('felicaA3', { detail: 'A3' });
const felicaAOffEvent = new CustomEvent('felicaAOff', { detail: 'felicaAOff' });


// Felicaカードをかざすと読み込まれたIDm（ID番号）
var currentIDm = "";


// Felicaカード
var cards = {};
cards["012e4cd44ac12d"] = "A1";  // FeliCa Card 1
cards["012e4ce3500d42"] = "A2";  // FeliCa Card 2
cards["012e4ce3500d32"] = "A3";  // FeliCa Card 3


async function sleep(msec) {
  return new Promise(resolve => setTimeout(resolve, msec));
}

async function send(device, data) {
  let uint8a = new Uint8Array(data);
  await device.transferOut(2, uint8a);
  await sleep(10);
}

async function receive(device, len) {
  let data = await device.transferIn(1, len);
  await sleep(10);
  let arr = [];
  for (let i = data.data.byteOffset; i < data.data.byteLength; i++) {
    arr.push(data.data.getUint8(i));
  }
  return arr;
}

async function session(device) {
  await send(device, [0x00, 0x00, 0xff, 0x00, 0xff, 0x00]);
  await send(device, [0x00, 0x00, 0xff, 0xff, 0xff, 0x03, 0x00, 0xfd, 0xd6, 0x2a, 0x01, 0xff, 0x00]);
  await receive(device, 6);
  await receive(device, 13);
  await send(device, [0x00, 0x00, 0xff, 0xff, 0xff, 0x03, 0x00, 0xfd, 0xd6, 0x06, 0x00, 0x24, 0x00]);
  await receive(device, 6);
  await receive(device, 13);

  await send(device, [0x00, 0x00, 0xff, 0xff, 0xff, 0x03, 0x00, 0xfd, 0xd6, 0x06, 0x00, 0x24, 0x00]);
  await receive(device, 6);
  await receive(device, 13);
 
  await send(device, [0x00, 0x00, 0xff, 0xff, 0xff, 0x06, 0x00, 0xfa, 0xd6, 0x00, 0x01, 0x01, 0x0f, 0x01, 0x18, 0x00]);
  await receive(device, 6);
  await receive(device, 13);

  await send(device, [0x00, 0x00, 0xff, 0xff, 0xff, 0x28, 0x00, 0xd8, 0xd6, 0x02, 0x00, 0x18, 0x01, 0x01, 0x02, 0x01, 0x03, 0x00, 0x04, 0x00, 0x05, 0x00, 0x06, 0x00, 0x07, 0x08, 0x08, 0x00, 0x09, 0x00, 0x0a, 0x00, 0x0b, 0x00, 0x0c, 0x00, 0x0e, 0x04, 0x0f, 0x00, 0x10, 0x00, 0x11, 0x00, 0x12, 0x00, 0x13, 0x06, 0x4b, 0x00]);
  await receive(device, 6);
  await receive(device, 13);

  await send(device, [0x00, 0x00, 0xff, 0xff, 0xff, 0x04, 0x00, 0xfc, 0xd6, 0x02, 0x00, 0x18, 0x10, 0x00]);
  await receive(device, 6);
  await receive(device, 13);

  await send(device, [0x00, 0x00, 0xff, 0xff, 0xff, 0x0a, 0x00, 0xf6, 0xd6, 0x04, 0x6e, 0x00, 0x06, 0x00, 0xff, 0xff, 0x01, 0x00, 0xb3, 0x00]);
  await receive(device, 6);
  
  let idm = (await receive(device, 37)).slice(17, 24);
  if (idm.length > 0) {
    let idmStr = '';
    for (let i = 0; i < idm.length; i++) {
      if (idm[i] < 16) {
        idmStr += '0';
      }
      idmStr += idm[i].toString(16);
    }
    // この時点で、idmStr変数にFeliCaリーダーにかざしたFeliCaカードの
    // IDが入っていることになる。かざしていなければ、空文字が入っている。
  if( currentIDm != idmStr ) {

	  if( currentIDm == "" ) {
      // 新しいFeliCaカードがかざされた！というイベント発生
	    currentIDm = idmStr;

      // 1/2/3のうち、どのFeliCaカードかを検出する
      var action = cards[idmStr];
        
      if(action == "A1") {
        // 「1」のFeliCaカードをかざした
        document.dispatchEvent(felicaA1Event);
      }
      else if(action == "A2") {
        // 「2」のFeliCaカードをかざした
        document.dispatchEvent(felicaA2Event);
      }
      else if(action == "A3") {
        // 「3」のFeliCaカードをかざした
        document.dispatchEvent(felicaA3Event);
      }
      else {
        // なにもしない
      }
        
	  }
  }
    else {
	// still the same card is placed on the reader, and do nothing.
    }
  } else {
    // FeliCaカードがカードリーダーからはずされた
    if( currentIDm != "" ) {
    	currentIDm = "";
        
        // FeliCaカードをリーダーからはずしたイベントを通知
        document.dispatchEvent(felicaAOffEvent);
    }
  }
}

document.addEventListener('webUSBAclick', async () => {
  let device;
  try {
    device = await navigator.usb.requestDevice({ filters: [{
      vendorId: 0x054c
    }]});
    await device.open();
  } catch (e) {
    alert(e);
    throw e;
  }
  try {
    await device.selectConfiguration(1);
    await device.claimInterface(0);
    //startDiv.style.display = 'none';
    do {
      await session(device);
      await sleep(1000);
    } while (true);
  } catch (e) {
    alert(e);
    try {
      device.close();
    } catch (e) {
      console.log(e);
    }
    //startDiv.style.display = 'block';
    throw e;
  }
});
