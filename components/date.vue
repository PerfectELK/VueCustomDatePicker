<template>
    <div class="datePicker__container">
        <input class="input__date" type="text" :value="inputValue" @click="showTimeWindow()" readonly>
        <div class="time-window" v-if="modalOpen">
            <div class="control__panel">
                <button class="control__panel-left" @click="minusMonth()"></button>
                <span class="control__panel-select_date">
                {{ inputValue }}
                </span>
                <button class="control__panel-right" @click="plusMonth()"></button>
            </div>
            <div class="day__table">
                <button class="day__table-item" v-for="day in DayArray" @click="setDay(day)">{{ day }}</button>
            </div>
        </div>
    </div>
</template>

<script>
    module.exports = {
        data(){
            return{
                currentMonth:new Date().getMonth(),
                currentYear: new Date().getFullYear(),
                currentDay: new Date().getDate(),
                currentMonthIndex: new Date().getMonth(),
                currentYearIndex: new Date().getFullYear(),
                inputValue:"",
                DayArray:[],
                modalOpen:false,
            }
        },
        methods:{
            minusMonth:function(){
                this.currentDay = 1;
                if(this.currentMonth != 0){
                    this.currentMonth--;
                }else{
                    this.currentYear--;
                    this.currentMonth = 11;
                }
                this.dayInMonth();
                this.setValueOnInput();
                this.createDayArray();
            },
            plusMonth:function(){
                this.currentDay = 1;
                if(this.currentMonth != 11){
                    this.currentMonth++;
                }else{
                    this.currentYear++;
                    this.currentMonth = 0;
                }
                this.dayInMonth();
                this.setValueOnInput();
                this.createDayArray();
            },
            setDay:function(day){
                this.currentDay = day;
                this.setValueOnInput();
                console.log(this.currentDay);
                this.showTimeWindow();
            },
            dayInMonth:function(){
                return 33 - new Date(this.currentYear, this.currentMonth, 33).getDate()
            },
            setValueOnInput:function(){
                this.inputValue = this.currentDay + "-" + this.getCurrentMonth() + "-" + this.currentYear;
            },
            getCurrentMonth:function(){
                if((this.currentMonth + 1) <= 9){
                    let cm = this.currentMonth + 1;
                    return "0" + cm
                }else{
                    return this.currentMonth + 1;
                }
            },
            showTimeWindow:function(){
                this.modalOpen = !this.modalOpen;
            },
            createDayArray:function(){
                let j = [];
                for(let i = 1; i <= this.dayInMonth();i++){
                    j.push(i);
                }
                this.DayArray = j;
            }
        },
        created(){
            this.setValueOnInput();
            this.createDayArray();
        }
    }
</script>

<style>
    .time-window{
        max-width: 180px;
        margin: 0 auto;
        position: absolute;
        z-index: 1000;
        background-color:#dddddd ;
    }
    .datePicker__container{
        max-width: 200px;
        text-align: center;
    }
    .day__table{
        max-width: 180px;
    }
    .control__panel > button{
        width:30px;
        height: 30px;
        border: none;
        padding: 0;
        outline: none;
        position: relative;
    }
    .control__panel{
        max-width: 180px;
        text-align: center;
    }
    .day__table-item{
        width:30px;
        height: 30px;
        border: none;
        padding: 0;
        outline: none;
    }
    .day__table-item:active{
        background-color: #adcbfb;
    }
    .day__table-item:focus{
        background-color: #adcbfb;
    }
    .control__panel-left::before{
        content: "";
        width: 50%;
        height: 2px;
        border-radius: 20px;
        background-color: #000;
        position: absolute;
        top:35%;
        left:50%;
        transform: translate(-50%,-50%) rotate(-45deg);
    }
    .control__panel-left::after{
        content: "";
        width: 50%;
        height: 2px;
        border-radius: 20px;
        background-color: #000;
        position: absolute;
        top:69%;
        left:50%;
        transform: translate(-50%,-50%) rotate(45deg);
    }
    .control__panel-right::before{
        content: "";
        width: 50%;
        height: 2px;
        border-radius: 20px;
        background-color: #000;
        position: absolute;
        top:35%;
        left:50%;
        transform: translate(-50%,-50%) rotate(45deg);
    }
    .control__panel-right::after{
        content: "";
        width: 50%;
        height: 2px;
        border-radius: 20px;
        background-color: #000;
        position: absolute;
        top:69%;
        left:50%;
        transform: translate(-50%,-50%) rotate(-45deg);
    }
    .control__panel-select_date{
        height: auto;
        width: 100px;
        display: inline-block;
        font-size: 19px;
        vertical-align: top;
        margin-top: 4px;
    }
    .input__date{
        width:100%;
        outline: none;
        height: 25px;
        font-size: 23px;
        border: 0.5px solid #d7d2fb;
        text-align: center;
    }
</style>