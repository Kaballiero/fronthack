import classNames from "classnames"

import Footer from "../../component/footer/Footer"
import Header from "../../component/header/Header"

import icon from './icon.svg'
import styles from './styles.module.scss'

const getStyle=(index:number)=>{
    switch(index){
        case 0: return styles.plan_base
        case 1: return styles.plan_advanced
        case 2: return styles.plan_special
        case 3: return styles.plan_partner
    }
}

const opportunitiesMap= [
    {opportunitie:"opportunitie",text:"text"},
    {opportunitie:"opportunitie",text:"text"},
    {opportunitie:"opportunitie",text:"text"}
]

const rateMap= [
    {name:"name1",property:["До 20 итераций диалога в час",
    "Лимит на запрос: 1024 символа",
    "Возможность хранения до 5ти шаблонов",
    "Лимит на размер загружаемых файлов: 10 Мб"], price:"200"},
    {name:"name2",property:["prop1","prop1","prop1","prop1"], price:"499"},
    {name:"name3",property:["prop1","prop1","prop1","prop1"], price:"899"},
    {name:"name4",property:["prop1","prop1","prop1"], price:"90000"}
]


const GuestPage=()=>{
return(
<div className={styles.mainPage}>
    <Header/>
    
    <div className={styles.chat}>
        <p className={styles.title}>Попробуйте преобразовать свои мысли</p>

        <div className={styles.border}>
            <div className={styles.content}>
                fghfg
            </div>
         </div>

         <div className={styles.message}>
            <input type="text" placeholder="Введите текст или загрузите свой файл для обработки..." className={styles.message_inp} />
            <button  className={styles.message_btn}>
                <img src={icon}/>
            </button>
         </div>

    </div>

    <div className={styles.opportunities}>
        <p className={styles.title}>Новые возможности в сфере обработки текста</p>
        <div className={styles.container}>
            <h1 className={styles.text}>Добрый день!  
            Вас приветствует система семантической обработки текста.
            В данном окне вы можете протестировать основные её  возможности, просто отправив описание...
            </h1>
            {opportunitiesMap.map(opportuniti=>
                <div className={styles.opportuniti}>
                <h1 className={styles.opportuniti_name}>{opportuniti.opportunitie}</h1>
                <h1 className={styles.opportuniti_description}>{opportuniti.text}</h1>
                </div>
            )
            }
        </div>
    </div>

    <div className={styles.rate}>
        <p className={styles.title}>Выберите СВОЙ тарифный план:</p>
        <div className={styles.rate_plans}>
            {rateMap.map((plan,index)=>
            <div className={classNames(styles.plan, getStyle(index))}> 
            <p className={styles.plan_name}>{plan.name}</p> 
                <div className={styles.plan_conditions}>
                <ul className={styles.conditions_list}>
                    {plan.property.map(prop=><li className={styles.conditions_list_item}>{prop}</li>)}
                </ul>
            
            <p className={styles.plan_price}>{plan.price} руб/мес</p>    
                </div>
            </div>)
            }
        </div>
        <button className={styles.rate_btn}>Перейти к выбору</button>
    </div>

    
    <Footer/>
</div>
)
}
export default GuestPage