$('#chatbot-icon').mouseover(function () {
  $('#chatbot-icon').attr('src', 'images/chatbot-icon-over.png');
});

$('#chatbot-icon').mouseout(function () {
  $('#chatbot-icon').attr('src', 'images/chatbot-icon.png');
});

$('#new-chat').on('click', function () {
  $('.chatbox').empty();
  $('.chatbox').append(`<div class="friend-bubble bubble">
  </div>
  <div class="friend-bubble bubble">
    <button id="time-btn">이용 시간</button>
    <button id="fee-btn">입장 요금</button>
    <button id="reserve-btn">티켓 예매</button>
    <button id="clerk-btn">상담원 연결</button>
  </div>`);

  var typingBool = false;
  var typingIdx = 0;
  var typingTxt = "방문해주셔서 감사합니다 :) 어떻게 도와드릴까요?";

  typingTxt = typingTxt.split("");

  if (typingBool == false) {
    typingBool = true;
    var tyInt = setInterval(typing, 100);
  }

  function typing() {
    if (typingIdx < typingTxt.length) {
      $('.friend-bubble').eq(0).append(typingTxt[typingIdx]);
      typingIdx++
    } else {
      clearInterval(tyInt);
    }
  }

  $('.friend-bubble').eq(1).hide();

  function show() {
    $('.friend-bubble').eq(1).show();
  }

  setTimeout(show, 3500);

  $('#time-btn').on('click', function () {
    $('.chatbox').append(`<div class="my-bubble bubble">이용 시간</div>`).delay(1000).queue(function () {
      $('.chatbox').append(`<div class="friend-bubble bubble">
      <b>동물원 이용 시간입니다.</b><br>
      <b>동절기(11월~2월)</b>: 09:00 ~ 17:00<br>
      <b>간절기(3월~4월, 9월~10월)</b>: 09:00 ~ 18:00<br>
      <b>하절기(5~8월)</b>: 09:00 ~ 19:00<br>
      * 쉬는 날 없이 운영 (365일 연중무휴), 이용마감 1시간 전까지 입장 가능<br>
      * 날씨나 동물 상태에 따라 동물이 조기에 실내에 들어갈 수 있음을 양해바랍니다.
      </div>`);
      const top = $('.chatbox').prop('scrollHeight');
      $('.chatbox').scrollTop(top);
      $('.chatbox').dequeue();
    });
  })
  
  $('#fee-btn').on('click', function () {
    $('.chatbox').append(`<div class="my-bubble bubble">입장 요금</div>`).delay(1000).queue(function () {
      $('.chatbox').append(`<div class="friend-bubble bubble">
      <b>입장 요금입니다.</b><br>
      <b>어른(만 19세~만 64세)</b>: 5,000원<br>
      <b>청소년(만 13세~만 18세)</b>: 3,000원<br>
      <b>어린이(만 6세~만 12세)</b>: 2,000원<br>
      * 만 5세 이하, 만 65세 이상 무료<br>
      * 입장권은 당일에 한하여 유효함
      </div>`);
      const top = $('.chatbox').prop('scrollHeight');
      $('.chatbox').scrollTop(top);
      $('.chatbox').dequeue();
    });
  });
  
  $('#reserve-btn').on('click', function () {
    $('.chatbox').append(`<div class="my-bubble bubble">티켓 예매</div>`).delay(1000).queue(function () {
      $('.chatbox').append(`<div class="friend-bubble bubble">
      <b>온라인 티켓 예매입니다.</b><br>
      예매하신 온라인 티켓은 동물원 정문 매표소에 위치한 온라인전용 무인 발권기에서 실제 티켓으로 교환하셔야 합니다.(타 매표소 이용불가)<br>
      <b>아래 로고를 클릭하시면 예매사이트로 이동합니다.</b><br>
      <a href="https://www.naver.com/" target="_blank"><img src="images/naver.png"></a>
      <a href="https://www.coupang.com/" target="_blank"><img src="images/coupang.png"></a>
      <a href="https://www.tmon.co.kr/" target="_blank"><img src="images/tmon.png"></a>
      <br>* 미사용(미발권) 티켓만 환불 가능<br>
      * 구매 후 7일 이내 취소/환불 가능
      </div>`);
      const top = $('.chatbox').prop('scrollHeight');
      $('.chatbox').scrollTop(top);
      $('.chatbox').dequeue();
    });
  });
  
  $('#clerk-btn').on('click', function () {
    $('.chatbox').append(`<div class="my-bubble bubble">상담원 연결</div>`).delay(1000).queue(function () {
      $('.chatbox').append(`<div class="friend-bubble bubble">
      <b>상담원을 연결합니다.</b><br>
      상담원이 순서대로 내용을 확인 후 답변을 드립니다.<br>
      문의량이 많아 상담 연결이 지연될 수 있음을 양해바랍니다.<br>
      빠른 상담을 원하시면 <b>02)123-4567</b>로 연락바랍니다.
      </div>`);
      const top = $('.chatbox').prop('scrollHeight');
      $('.chatbox').scrollTop(top);
      $('.chatbox').dequeue();
    });
  });
});

$('#chatbot').hide();

$('#chatbot-icon').on('click', function () {
  $('#chatbot').fadeIn();
})

$('#close').on('click', function () {
  $('#chatbot').fadeOut();
})

var typingBool = false;
var typingIdx = 0;
var typingTxt = "방문해주셔서 감사합니다 :) 어떻게 도와드릴까요?";

typingTxt = typingTxt.split("");

if (typingBool == false) {
  typingBool = true;
  var tyInt = setInterval(typing, 100);
}

function typing() {
  if (typingIdx < typingTxt.length) {
    $('.friend-bubble').eq(0).append(typingTxt[typingIdx]);
    typingIdx++
  } else {
    clearInterval(tyInt);
  }
}

$('.friend-bubble').eq(1).hide();

function show() {
  $('.friend-bubble').eq(1).show();
}

setTimeout(show, 3500);

$('textarea').keydown(function (key) {
  if (key.keycode == 13) {
    $('.chatbox').append(`<div class="my-bubble bubble">` + $('textarea').val() + `</div>`);
    console.log($('textarea').val());
    $('textarea').val('');
    const top = $('.chatbox').prop('scrollHeight');
    $('.chatbox').scrollTop(top);
  }
})

$('#send').on('click', function () {
  if ($('textarea').val() !== '') {
    $('.chatbox').append(`<div class="my-bubble bubble">` + $('textarea').val() + `</div>`);
    console.log($('textarea').val());
    $('textarea').val('');
    const top = $('.chatbox').prop('scrollHeight');
    $('.chatbox').scrollTop(top);
  }
});

$('#time-btn').on('click', function () {
  $('.chatbox').append(`<div class="my-bubble bubble">이용 시간</div>`).delay(1000).queue(function () {
    $('.chatbox').append(`<div class="friend-bubble bubble">
    <b>동물원 이용 시간입니다.</b><br>
    <b>동절기(11월~2월)</b>: 09:00 ~ 17:00<br>
    <b>간절기(3월~4월, 9월~10월)</b>: 09:00 ~ 18:00<br>
    <b>하절기(5~8월)</b>: 09:00 ~ 19:00<br>
    * 쉬는 날 없이 운영 (365일 연중무휴), 이용마감 1시간 전까지 입장 가능<br>
    * 날씨나 동물 상태에 따라 동물이 조기에 실내에 들어갈 수 있음을 양해바랍니다.
    </div>`);
    const top = $('.chatbox').prop('scrollHeight');
    $('.chatbox').scrollTop(top);
    $('.chatbox').dequeue();
  });
})

$('#fee-btn').on('click', function () {
  $('.chatbox').append(`<div class="my-bubble bubble">입장 요금</div>`).delay(1000).queue(function () {
    $('.chatbox').append(`<div class="friend-bubble bubble">
    <b>입장 요금입니다.</b><br>
    <b>어른(만 19세~만 64세)</b>: 5,000원<br>
    <b>청소년(만 13세~만 18세)</b>: 3,000원<br>
    <b>어린이(만 6세~만 12세)</b>: 2,000원<br>
    * 만 5세 이하, 만 65세 이상 무료<br>
    * 입장권은 당일에 한하여 유효함
    </div>`);
    const top = $('.chatbox').prop('scrollHeight');
    $('.chatbox').scrollTop(top);
    $('.chatbox').dequeue();
  });
});

$('#reserve-btn').on('click', function () {
  $('.chatbox').append(`<div class="my-bubble bubble">티켓 예매</div>`).delay(1000).queue(function () {
    $('.chatbox').append(`<div class="friend-bubble bubble">
    <b>온라인 티켓 예매입니다.</b><br>
    예매하신 온라인 티켓은 동물원 정문 매표소에 위치한 온라인전용 무인 발권기에서 실제 티켓으로 교환하셔야 합니다.(타 매표소 이용불가)<br>
    <b>아래 로고를 클릭하시면 예매사이트로 이동합니다.</b><br>
    <a href="https://www.naver.com/" target="_blank"><img src="images/naver.png"></a>
    <a href="https://www.coupang.com/" target="_blank"><img src="images/coupang.png"></a>
    <a href="https://www.tmon.co.kr/" target="_blank"><img src="images/tmon.png"></a>
    <br>* 미사용(미발권) 티켓만 환불 가능<br>
    * 구매 후 7일 이내 취소/환불 가능
    </div>`);
    const top = $('.chatbox').prop('scrollHeight');
    $('.chatbox').scrollTop(top);
    $('.chatbox').dequeue();
  });
});

$('#clerk-btn').on('click', function () {
  $('.chatbox').append(`<div class="my-bubble bubble">상담원 연결</div>`).delay(1000).queue(function () {
    $('.chatbox').append(`<div class="friend-bubble bubble">
    <b>상담원을 연결합니다.</b><br>
    상담원이 순서대로 내용을 확인 후 답변을 드립니다.<br>
    문의량이 많아 상담 연결이 지연될 수 있음을 양해바랍니다.<br>
    빠른 상담을 원하시면 <b>02)123-4567</b>로 연락바랍니다.
    </div>`);
    const top = $('.chatbox').prop('scrollHeight');
    $('.chatbox').scrollTop(top);
    $('.chatbox').dequeue();
  });
});

let clickNum = 0;

$('#color-change').on('click', function () {
  if (clickNum == 0) {
    $('#chatbot').css('background', 'linear-gradient(#a9a685, white)');
    clickNum++;
  } else {
    $('#chatbot').css('background', 'linear-gradient(#ff9541, white)');
    clickNum = 0;
  }
})

$('#reset').on('click', function () {
  $('.chatbox').scrollTop(0);
})

$('textarea').keydown(function enterkey() {
  if (window.event.keyCode == 13) {
    if ($('textarea').val() !== '') {
      $('.chatbox').append(`<div class="my-bubble bubble">` + $('textarea').val() + `</div>`);
      console.log($('textarea').val());
      $('textarea').val('');
      const top = $('.chatbox').prop('scrollHeight');
      $('.chatbox').scrollTop(top);
    }
  }
})