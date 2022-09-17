

function add(value) {
    $.ajax({
        type: 'get',
        url: 'http://api.tianapi.com/tianqi/index',
        data: {
            key: '5e4fb7f5b151f486a3ee3f3928faa190',
            city: `${value}`
        },
        success: function (data) {
            console.log(data)
            if (data.msg === 'success') {
                var Maxarr = [];
                var weekarr = [];
                var Minarr = [];
                for (var i = 0; i < data.newslist.length; i++) {
                    var $list1 = $(`<div class="list" data-index='${i}'>${data.newslist[i].week}</div>`)
                    // console.log($list1)
                    $('.week-item').append($list1);

                    weekarr.push(data.newslist[i].week)

                    var $list2 = $(`<div class="list">
                                    <img class="img-auto" src="./img/${data.newslist[i].weatherimg}" alt="">
                                </div>`)
                    $('.weather-top').append($list2);

                    var $list3 = $(`<div class="list">${data.newslist[i].weather}</div>`)
                    $('.weather-text').append($list3);

                    // var $list4 = $(`<div class="list">${data.newslist[i].highest}</div>`)
                    // $('.Max').append($list4);
                    Maxarr.push(data.newslist[i].highest.slice(0, -1))


                    // var $list4 = $(`<div class="list">${data.newslist[i].lowest}</div>`)
                    // $('.Min').append($list4);
                    Minarr.push(data.newslist[i].lowest.slice(0, -1))

                }

                console.log(Maxarr)
                console.log(weekarr)
                console.log(Minarr)


                var chartDom = document.getElementById('main');
                var myChart = echarts.init(chartDom);
                var option;

                option = {
                    xAxis: {
                        type: 'category',
                        data: weekarr
                    },
                    yAxis: {
                        type: 'value',
                        show: false,
                        max: 50,
                        min: 0
                    },
                    series: [
                        {
                            data: Maxarr,
                            type: 'line',
                            label: {
                                show: true,
                                position: 'top'
                            },

                        }
                    ]
                };

                myChart.setOption(option);


                var chartDom1 = document.getElementById('main1');
                var myChart1 = echarts.init(chartDom1);
                var option1;

                option1 = {
                    xAxis: {
                        type: 'category',
                        data: weekarr
                    },
                    yAxis: {
                        type: 'value',
                        show: false,
                        max: 50,
                        min: 0
                    },
                    series: [
                        {
                            data: Minarr,
                            type: 'line',
                            label: {
                                show: true,
                                position: 'top'
                            },

                        }
                    ]
                };

                myChart1.setOption(option1);


                for (var j = 0; j < $('.week-item>.list').length; j++) {
                    // console.log(document.querySelectorAll('.week-item>.list')[j].dataset.index)

  

                    // console.log(week)
                    if (0 == document.querySelectorAll('.week-item>.list')[j].dataset.index) {
                        document.querySelectorAll('.week-item>.list')[j].textContent = '今天'
                        document.querySelectorAll('.week-item>.list')[j].classList.add('blue')

                        $('.tips>.text').text(data.newslist[j].tips)


                        var $wendu = $(`<div class="wendu">${data.newslist[j].real.slice(0, -1)}</div>`)
                        $('.temperature>.left').append($wendu)

                        var $top = $(`<div class="top">紫外线强度:${data.newslist[j].uv_index}</div>`)
                        $('.right').prepend($top)

                        var $wind = $(`<span class="center-text">${data.newslist[j].wind}</span>`)
                        $('.center').append($wind)

                        var $windsc = $(`<span class="center-tx">${data.newslist[j].windsc}</span>`)
                        $('.center').append($windsc)

                        var $humidity = $(`<span class="bottom-tx">${data.newslist[j].humidity}</span>`)
                        $('.bottom').append($humidity)

                        var $time = $(`<div class="time" style="float: right;line-height: 40px;">${data.newslist[j].date}</div>`)
                        $('.area').append($time)

                    }
                }
            } else {
                alert('输入城市有误')
            }
        }
    })
}


add('广州')

