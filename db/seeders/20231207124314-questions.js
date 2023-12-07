'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    
      await queryInterface.bulkInsert('Questions', [{
        name: 'Какому государству принадлежит данный флаг?',
        img: 'https://img.freepik.com/premium-vector/flag-of-dprk-north-korea-with-a-wavy-effect-due-to-the-wind_741378-214.jpg',
        answer: 'северная корея',
        themeId: 1,
        createdAt: new Date(),
        updatedAt: new Date(), 
      },
      {
        name: 'Идентифицируйте флаг следующей страны.',
        img: 'https://rusatribut.ru/files/products/flag-urugvaya-.1000x1000w.jpg?30c85453dbf769b5b4e0e96c80dd9e41',
        answer: 'уругвай',
        themeId: 1,
        createdAt: new Date(),
        updatedAt: new Date(), 
      },
      {
        name: 'Какое государство использует этот флаг?',
        img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAn1BMVEX30RfPFCsAM6v/////2gAAG7MANbLZERgAMaoAMKoAJqgAKqkALKkALqoAL6oAKKgAIadgesb3+f0AH6eGmtPR2u9Va77d4vIAGaUuULUWO60+XbqfrttHYrxLZr5ZcMGuuN61wuXs8PnH0OoWQLAAFKVogMhZdsW/yOaPn9Tj5/QADKV9kM4yVbiZodKQms8gSrR+lNFzg8irtNsbPq75l/0VAAAFTklEQVR4nO2ba3eyOBRGHTKXEEAQUMSiiKJWq7728v9/24Sr6Jk1s+ZDPaz67C9iTbvCXslJ8mAHAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAID/ye/gnsEf4J6BAe6BEwqcUOCE0h8nkrsDLf1xcuHuQEtfnJiz5czk7kRNX5w4L+LF4e5ETV+ceIlIPO5O1PTAydBxbGsYici2bMcZcneHz4nZFg85X0zSNPSFH6bpZDFv1x/JpYfJiXmaN3fspJHwfVGgX6K0qSryMmcqMExOvCRUzbV1GYuG8cVqf7x9nfJ0jseJdFfr6w07QViPkzC4Dg1v6ec8qzOPEzv1hXvduJrTZelkOe1sZje+OLoMfWNwIpVmkwixneoLq5QgjXXpZF1t8KWlPwlOQmRFE/XwwfJoJ/ISFhyEiN7DcP+eFxb0hk2skpWotm1ydtyH4fu6mEua/enRJ6GHO5F7v62owt/K4oZVKMbzzXwsqsJrpqtrE5HMfroTQ3pxu8xkuSruV7pREtiGHSRR+d6wZNI0OcyDHz93NI5d3/G7Va0yeifiVm4Wl2pMmGpbjabMsP7lL30THOuOtShveDVrt2eOvHnVV9ND6WSk/vEvfC8cTrx9NU6ONzd8M0WstBonLNs2Did6DKy2R19kqls9424TpafXOT0I32GI3xicDE9iHKtgcRD2dWzI2bKzvkj3sBpN1exVbJ+jnlj7/VRXEsv9HNntD28zpeHL2lDF/vaYMJwDOebOxa62q3Z8HRm3mZJ5Mcpjs7Q4UloOJ+3iUl04tm1bTpUp2bbT/YgnzefP2eQinUwmuuT6R/2aLvifafA7GZaZkl9GSkWmxB8+8jsxLGfdHm7WDsM6cw9bHtuZIqZ7rDOlo9vduXE97+HKY+O8K2X6WTr5nHY0mHnMJIXJSZCNOpNEzqqj8rgbC1ijLHh8xwp4nJhffvcJl11kSmGTKdV4ic/0tJTHifUhDm/XtyoU63gar0XYORW+rcQHT8F9uBPT0gSZELHSF+URT9rjcOMYziaM7Oq9/kTFQmRB0fjHZ0rytB1p9Dqz3I1G211RQa6Z0rzIlORsp9vslno+FU238U/PHmX+2slaxUc5CNqnoFUyYH50m7zmP92JYQajNoHO8qp+yLsTkMqzpslq9wx5rHTrkNrfN3lsnlfF1Mrz5lhYp/vj2H38+Ydj3VG7KpJ/q29XztZpIA0ZpOtmgyLfqjx29yx5bFA9CfUXTaTkJWJvKGN/jVDsKsYWS45tG4MT6a30yUZXjHMzCOyJPv2d9Elw0lhSZ11t9Clo5T1HHmuNxDj3Nkc/amqF+RWVoyL6aqaOG/nHjXcZi9GT5LFJMtTFVb1EzSFP1rNpGTSS4uikiqU5SZ7DiXGqxoc1q3dj0jvV4+RUTxUZz8pZJN0TQ/84nDQbjno3Mpye2w1amegbnR0LxymQP2czX64xmy61L/zfHOZ3Mtyef/36VYRKn/r1vOX/5jC/E8NWSnnGQRwMT1/Z//0L300PnJQEmcjwPepbrIlY9GCIlPTFifwaf/E/7arojRNj0Zv/auqLE0MO+6KkP056BJxQ4IQCJ5TBn+CewV/gnsFv4B44ocAJBU4ocEKBEwqcUOCEAicUOKHACQVOKHBCgRMKnFDghAInFDihwAkFTihwQoETCpxQ4IQCJxQ4ocAJBU4ocEKBEwqcUOCEAicUOKHACQVOKHBCgRMKnFDghAInFDihwAkFTihwQoETCpxQ4IQCJxQ4ocAJBU4ocEKBEwqcUOCEAicUOKHACQVOKH8DGGcYEHe+H2MAAAAASUVORK5CYII=',
        answer: 'венесуэла',
        themeId: 1,
        createdAt: new Date(),
        updatedAt: new Date(), 
      },
      {
        name: 'Узнайте, к какой стране относится данный флаг.',
        img: 'https://flagshub.com/images/flag-of-saudi-arabia.png',
        answer: 'саудовская аравия',
        themeId: 1,
        createdAt: new Date(),
        updatedAt: new Date(), 
      },
      {
        name: 'Узнайте, к какой стране относится данный флаг.',
        img: 'http://flagiaf.ru/panama/panama1.png',
        answer: 'панама',
        themeId: 1,
        createdAt: new Date(),
        updatedAt: new Date(), 
      },
      {
        name: 'Какая известная конфета из твоего детства представлена на этой картинке?',
        img: 'https://sun9-52.userapi.com/impg/y9h_HWybO-IZLddQAHDgBDCHXKqAHg4dVpm2Ug/g6DSMLvR9hw.jpg?size=940x886&quality=96&sign=e538764db959a0a1af7e7266b73438f2&type=album',
        answer: 'кислинка',
        themeId: 2,
        createdAt: new Date(),
        updatedAt: new Date(), 
      },
      {
        name: 'Какое сладкое воспоминание ты видишь на этой картинке?',
        img: 'https://sun9-24.userapi.com/impg/ZftmZY3qeTwiaJiI2vtgdWGChSdl86j3ZxvzCg/6QHFGtkY9z8.jpg?size=800x600&quality=96&sign=c9f6d8859f4317cc17f80707b56b9b51&type=album',
        answer: 'баба яга',
        themeId: 2,
        createdAt: new Date(),
        updatedAt: new Date(), 
      },
      {
        name: 'Можешь ли ты назвать сладость, изображенную на этой картинке?',
        img: 'https://sun9-17.userapi.com/impg/5wCd4RnfvicK0KVo6QWMEGxsrLeb0hQhzEM0MA/uQ3k8OBsWGc.jpg?size=523x160&quality=96&sign=7f78a2a1c91b9ab1912e47fdb65a5b8c&type=album',
        answer: 'темпо',
        themeId: 2,
        createdAt: new Date(),
        updatedAt: new Date(), 
      },
      {
        name: 'Какую сладость ты узнаешь на этой картинке?',
        img: 'https://sun9-32.userapi.com/impg/hTFdS0US8XgNVQqrZ_DL_LDAD59TVzpCY3Qt9g/5jYXwAi5arI.jpg?size=719x568&quality=96&sign=fdfd9e0acd42fefe447fce964bcd3d35&type=album',
        answer: 'шипучка',
        themeId: 2,
        createdAt: new Date(),
        updatedAt: new Date(), 
      },
      {
        name: 'Какую сладость ты узнаешь на этой картинке?',
        img: 'https://sun9-34.userapi.com/impg/AOJXt4poI5lDF1Q8yvMq-BMQtO6n6CiQY6eryQ/9bVUSRFYu2U.jpg?size=750x750&quality=96&sign=1f8731b252d36e95196351d2b735c99e&type=album',
        answer: 'шок',
        themeId: 2,
        createdAt: new Date(),
        updatedAt: new Date(), 
      },
      {
        name: 'На какой консоли релизнули эту игру?',
        img: 'https://cubiq.ru/wp-content/uploads/2019/04/golden-joysticks-awards-ultimate-list-of-ultimate-winners-1983-2016_9.jpg',
        answer: 'сега',
        themeId: 3,
        createdAt: new Date(),
        updatedAt: new Date(), 
      },
      {
        name: 'Тот же вопрос',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTnCtbkqlwn7bjV4-cSWGBF6leTAiWDw8Wkg&usqp=CAU',
        answer: 'денди',
        themeId: 3,
        createdAt: new Date(),
        updatedAt: new Date(), 
      },
      {
        name: 'Название игры?',
        img: 'https://digwallpapers.com/wallpapers/full/c/e/5/38683-3600x2160-ocarina-of-time-background-image-desktop-hd.jpg',
        answer: 'зельда',
        themeId: 3,
        createdAt: new Date(),
        updatedAt: new Date(), 
      },
      {
        name: 'Тот же вопрос',
        img: 'https://cs10.pikabu.ru/post_img/big/2020/09/12/4/1599889508166977564.jpg',
        answer: 'контра',
        themeId: 3,
        createdAt: new Date(),
        updatedAt: new Date(), 
      },
      {
        name: 'Самый популярный персонаж этой игры? (по нашему мнению)',
        img: 'https://i.ytimg.com/vi/KmAV1dnf3Kk/hqdefault.jpg',
        answer: 'сабзиро',
        themeId: 3,
        createdAt: new Date(),
        updatedAt: new Date(), 
      },], {});
    
  },

  async down (queryInterface, Sequelize) {
    
    
      await queryInterface.bulkDelete('Questions', null, {});
     
  }
};
