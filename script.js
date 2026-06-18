function Q_01(){
    console.log("Hello, World!")
}
function Q_02(name){
    const sName=name
    console.log("student name is ",sName)
}
function Q_03(age){
    const pAge=age
    console.log("Patient age is "+pAge)
}
function Q_04(n1,n2){
    const num1=n1,num2=n2
    let sum= num1+num2
    console.log("sum of two items is "+sum)
}
function Q_05(n1,n2){
    const paid=n1,cost=n2
    let diff=n1-n2
    console.log("difference between two number is "+diff)
}
function Q_06(r,c){
    const row=r,column=c
    let items=row*column
    console.log("Total number of items is "+items)
}
function Q_07(s,g){
    const student=s,group=g
    let quotient=Math.trunc(student/group)
    console.log("quotient is ",quotient)
}
function Q_08(s,g){
    const student=s,group=g
    let reminder=s%g
    console.log("Reminder is ",reminder)
}
function Q_09(n){
    const side=n
    let square=side**2
    console.log("Square of this number is ",square)
}
function Q_10(n){
    const side=n
    let cube=side**3
    console.log("cube of this number is ",cube)
}
function Q_11(n1,n2){
    let length=n1,width=n2
    let area=length*width
    console.log("Area of this rectangle is ",area)
}
function Q_12(n1,n2){
    let length=n1,width=n2
    let perimeter=2*length+2*width
    console.log("perimeter of this rectangular is ",perimeter)
}
function Q_13(r){
    let radius=r
    let area=Math.PI*radius**2
    console.log("area of this circle is ",area)
}
function Q_14(r){
    let radius=r
    let circumference=2*Math.PI*radius
    console.log("circumference of this circle is ",circumference)
}
function Q_15(t){
    let temp=t
    let output= (temp * 9/5) + 32
    console.log("The given "+temp+"°C "+"is equal to "+output+"°F")
}
function Q_16(t){
    let temp=t
    let output=	(temp - 32) * 5/9
    console.log("The given "+temp+"°F "+"is equal to "+output+"°C")
}
function Q_17(m1,m2,m3){
    let marks1=m1,marks2=m2,marks3=m3
    let average=(marks1+marks2+marks3)/3
    console.log("average marks is "+average)
}
function Q_18(n1,n2){
    let score1=n1,score2=n2
    console.log("given order is "+score1+","+score2)
    let temp=score1
    score1=score2
    score2=temp
    console.log("swaped order is "+score1+","+score2 )
}
function Q_19(d){
    let duration=d
    let hour=Math.trunc(duration/60)
    let minute=duration%60
    console.log(hour+" hours and "+minute+" minutes")
}
function Q_20(i1,i2,i3){
    let item1=i1,item2=i2,item3=i3
    let total=item1+item2+item3
    console.log("Total is "+total)
}
function Q_21(b){
    let balance=b
    if(balance<0){
        console.log("current account balance is negative.")
    }else{
        console.log("current accout balance is positive.")
    }
}
function Q_22(n){
    let number=n
    if(number%2==0){
        console.log("This number is even")
    }else{
        console.log("This number is odd")
    }
}
function Q_23(s1,s2){
    let score1=s1,score2=s2
    if(score1>score2){
        console.log("Higher score is score 1")
    }else{
        console.log("Higher score is score 2")
    }
}
function Q_24(a1,a2){
    let amount1=a1,amount2=a2
    if(amount1<amount2){
        console.log("smaller amount is amount 1")
    }else{
        console.log("smaller amount is amount 2")
    }
}
function Q_25(a){
    let age=a
    if(age<18){
        console.log("This person not eligible to vote")
    }else{
        console.log("This person eligible to vote")
    }
}
function Q_26(m){
    let marks=m
    if(marks<50){
        console.log("This student has failed")
    }else{
        console.log("This student has passed")
    }
}
function Q_27(q1,q2,q3){
    let quot1=q1,quot2=q2,quot3=q3
    let highQuot=Math.max(quot1,quot2,quot3)
    console.log("highest quotation is "+highQuot)
}
function Q_28(p1,p2,p3){
    let price1=p1,price2=p2,price3=p3
    let cheapPrice=Math.min(price1,price2,price3)
    console.log("Cheapest price is "+cheapPrice)
}
function Q_29(q){
    let quantity=q
    if (quantity%5==0){
        console.log("Given quantity is divisible by 5")
    }else{
        console.log("Given quantity is not divisible by 5")
    }
}
function Q_30(n){
    let number=n
    if(n%2==0 && n%3==0){
        console.log("given number is divisible by both 3 and 5")
    }else{
        console.log("given number is not divisible by both 3 and 5")
    }
}
function Q_31(y){
    let year=y
    if(year%4==0 && year%100!=0){
        console.log("Given year is leap year")
    }else if(year%400==0){
        console.log("Given year is leap year")
    }else{
        console.log("Given year is not a leap year")
    }
}
function Q_32(l){
    let letter=l.toLowerCase()
    if (l=="a"||l=="e"||l=="i"||l=="o"||l=="u"){
        console.log("Entered letter is a vowel")
    }else{
        console.log("Entered letter is a consonant")
    }
}
function Q_33(i){
    let items=l
    if (items%10==0){
        console.log("Number of items is a multiple of 10")
    }else{
        console.log("Number of items is not a multiple of 10")
    }
}
function Q_34(t){
    let temp=t
    if (temp<0){
        console.log("temprature value is negative")
    }else if(temp==0){
        console.log("temprature value is zero")
    }else{
        console.log("temprature value is positive")
    }
}
function Q_35(n){
    let number=n
    if (1>number && 100<number){
        console.log("This number not falls within this range")
    }else{
        console.log("This number falls within this range")
    }
}
function Q_36(n){
    let number=n
    if (number>99 && number < 1000){
        console.log("this number is a three digit number")
    }else{
        console.log("this number is not a three digit number")
    }
}
function Q_37(l){
    let letter=l
    let cLetter=letter.toUpperCase()
    if (cLetter == letter){
        console.log("Typed letter is uppercase")
    }else{
        console.log("Typed letter is Lowercase")
    }
}
function Q_38(a1,a2){
    let age1=a1,age2=a2
    if (age1>age2){
        console.log("first entered age person is older")
    }else{
        console.log("second entered age person is older")
    }
}
function Q_39(a){
    let age=a
    if (age<60){
        console.log("This person is not eligible for this discount")
    }else{
        console.log("This person is eligible for this discount")
    }
}
function Q_40(a){
    let age=a
    if(age<13){
        console.log("This person is child")
    }else if(age<18){
        console.log("This person is a teenager")
    }else{
        console.log("This person is a adult")
    }
}
function Q_41(num){
    let marks=num;
    let grade="";
    if (marks>100 || marks<0){
        grade="Invalid"
    }else if(marks>=80){
        grade="A"
    }else if(marks>=70){
        grade="B"
    }else if(marks>=60){
        grade="C"
    }else if(marks>=50){
        grade="D"
    }else{
        grade="Failed"
    }
    console.log("The grade for the given number is "+grade)
}
function Q_24(n1,n2,o){
    let number1=n1,number2=n2,operator=o,output=0
    switch(operator){
        case "+":
            output=number1+number2
            break;
        case "-":
            output=number1-number2
            break;
        case "*":
            output=number1*number2
            break;
        case "/":
            output=number1/number2
            break;
        case "**":
            output=number1**number2
            break;
        default:
            break
    }
    console.log(output)
}
function Q_43(s1,s2,s3){
    let side1=s1,side2=s2,side3=s3
    if(side1==side2 && side2==side3){
        console.log("This is an equilateral")
    }else if(side1==side2 || side2==side3 || side3==side1){
        console.log("This is an isosceles")
    }else{
        console.log("This is a scalene")
    }
}
function Q_44(s1,s2,s3){
    let side1=s1,side2=s2,side3=s3
    if(side1+side2>side3 || side2+side3>side1 || side3+side1>side2){
        console.log("given sides can form a triangle")
    }else{
        console.log("given sides can not form a triangle")
    }
}
function Q_45(t1,t2,t3,t4){
    let team1=t1,team2=t2,team3=t3,team4=t4
    let highScore=Math.max(team1,team2,team3,team4)
    switch(highScore){
        case team1:
            console.log("Team 1 with the highest score")
            break;
        case team2:
            console.log("Team 2 with the highest score")
            break;
        case team3:
            console.log("Team 3 with the highest score")
            break;
        default:
            console.log("Team 4 with the highest score")
            break;
    }
}
function Q_46(q1,q2,q3,q4){
    let quot1=q1,quot2=q2,quot3=q3,quot4=q4
    let lowQuot=Math.min(quot1,quot2,quot3,quot4)
    console.log("Lowest quotation is "+lowQuot)
}
function Q_47(y){
    let year=y
    if (year%100==0){
        if (year%400==0){
            console.log("This century year is a leap year")
        }else{
            console.log("This century year is not a leap year")
        }
    }else{
        console.log("This is not a century year")
    }
}
function Q_48(u) {
    let units=u,totalBill = 0,energyCharge = 0,fixedCharge = 0
    if (units <= 60) {
        if (units <= 30) {
            energyCharge = units * 5.00;
            fixedCharge = 80;
        } else {
            energyCharge = (30 * 5.00) + ((units - 30) * 9.00);
            fixedCharge = 210;
        }
    } else {
        if (units <= 90) {
            energyCharge = (60 * 14.00) + ((units - 60) * 20.00);
            fixedCharge = 400;
        } else if (units <= 120) {
            energyCharge = (60 * 14.00) + (30 * 20.00) + ((units - 90) * 28.00);
            fixedCharge = 1000;
        } else if (units <= 180) {
            energyCharge = (60 * 14.00) + (30 * 20.00) + (30 * 28.00) + ((units - 120) * 44.00);
            fixedCharge = 1500;
        } else {
            energyCharge = (60 * 14.00) + (30 * 20.00) + (30 * 28.00) + (60 * 44.00) + ((units - 180) * 85.00);
            fixedCharge = 2100;
        }
    }

    totalBill = energyCharge + fixedCharge
    console.log("Electricity bill is " + totalBill)
}
function Q_50(a){
    let amount=a,discount=0
    if (y<2){
        discount=0
    }else if(y<4){
        discount=amount*0.05
    }else if(y<9){
        discount=amount*0.1
    }else{
        discount=amount*0.15
    }
    console.log("Salary is ",discount+amount)
}
function Q_51(b,y){
    let base=b,yearsOfService=y,bonuse=0
    if (y<2){
        bonuse=0
    }else if(y<4){
        bonuse=base*0.05
    }else if(y<9){
        bonuse=base*0.1
    }else{
        bonus=base*0.15
    }
    console.log("Salary is ",bonuse+base)
}
function Q_52(a){
    let age=a
    if(a<18){
        console.log("Ticket Price is 500 LKR")
    }else if(a<60){
        console.log("Ticket price is 1000 LKR")
    }else{
        console.log("Ticket price is 750 LKR")
    }
}
function Q_53(a){
    let age=a
    if (age>18){
        console.log("This person is eligible for a driving license")
    }else{
        console.log("")
    }
}
function Q_54(a,m){
    let age=a,marks=m
    if(age>17 && m>69 && m<=100){
        console.log("This student eligible for admission")
    }else{
        console.log("This student is not eligible for admission")
    }
}
function Q_55(num){
    let marks=num;
    let grade="";
    if (marks>100 || marks<0){
        grade="Invalid"
    }else if(marks>=90){
        grade="A+"
    }else if(marks>=80){
        grade="A"
    }else if(marks>=70){
        grade="B+"
    }else if(marks>=60){
        grade="B"
    }else if(marks>=50){
        grade="C"
    }else{
        grade="Failed"
    }
    console.log("The assigned grade is "+grade)
}
function Q_56(n){
    let number=n
    switch(number){
        case 1:
            console.log("Monday")
            break;
        case 2:
            console.log("Tuesday")
            break;
        case 3:
            console.log("Wednesday")
            break;
        case 4:
            console.log("Thursday")
            break;
        case 5:
            console.log("Friday")
            break;
        case 6:
            console.log("Saturday")
            break;
        case 7:
            console.log("Sunday")
            break;
        default:
            console.log("Invalid input")
            break;
    }
}
function Q_57(m){
    let month=m.toLowerCase()
    let seasons = {
        december: "Winter", january: "Winter", february: "Winter",
        march: "Spring", april: "Spring", may: "Spring",
        june: "Summer", july: "Summer", august: "Summer",
        september: "Autumn", october: "Autumn", november: "Autumn"
    }
    console.log("Entered month is a "+seasons[month]+" season")
}
function Q_58(c){
    let char=c
    if (/[a-zA-z]/.test(c)){
        console.log("Entered character is an alphabet")
    }else if(/[0-9]/.test(c)){
        console.log("Entered character is a digit")
    }else{
        console.log("Entered character is a special character")
    }
}
function Q_59(s){
    let salary=s,tax=0
    if(salary>1800000){
        if(salary>2500000){
            tax=(500000*0.06)+(500000*0.12)+(500000*0.18)+(500000*0.24)+(500000*0.3)+((salary-2500000)*0.36)
        }else if(salary>2000000){
            tax=(500000*0.06)+(500000*0.12)+(500000*0.18)+(500000*0.24)+((salary-2000000)*0.3) 
        }else if(salary>1500000){
            tax=(500000*0.06)+(500000*0.12)+(500000*0.18)+((salary-1500000)*0.24)
        }else if(salary>1000000){
            tax=(500000*0.06)+(500000*0.12)+((salary-1000000)*0.18)
        }else if(salary>500000){
            tax=(500000*0.06)+((salary-500000)*0.12)
        }else{
            tax=500000*0.06
    }}else{
        tax=0
    }
    console.log("tax is ",tax)
}
function Q_60(a,p){
    let amount=a,isPremiumMember=p//amount in $ and isPremiumMember is boolean data type
    if (isPremiumMember){
        console.log("This customer is eligible for free delivery")
    }else if(amount>35){
        console.log("This customer is eligible for free delivery")
    }else{
        console.log("This customer is not eligible for free delivery")
    }

}
function main(){
    Q_57("DecemBer")
}
main()
