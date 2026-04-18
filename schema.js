(function () {
  var schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Екатерина Булгакова",
      "url": "https://bulgakova-shopify.ru/",
      "sameAs": ["https://t.me/bulgakova_kt"],
      "jobTitle": "Shopify-наставник, предприниматель",
      "description": "Эксперт по запуску Shopify-магазинов и дропшипингу на международный рынок. Более 100 запущенных проектов, $20 000+ вложено в знания и практику.",
      "knowsAbout": ["Shopify", "Дропшипинг", "E-commerce", "Международный рынок", "Stripe", "Payoneer", "Shopify Payments"]
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Курсы и форматы обучения Shopify",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "Course",
            "name": "Гайд по Shopify",
            "description": "Сжатый вход в систему Shopify-бизнеса. Узнаешь как устроен Shopify-бизнес, с чего начинается запуск, как формируется прибыль и подходит ли тебе эта модель.",
            "provider": { "@type": "Person", "name": "Екатерина Булгакова" },
            "courseMode": "online",
            "inLanguage": "ru",
            "offers": { "@type": "Offer", "price": "3900", "priceCurrency": "RUB", "availability": "https://schema.org/InStock" }
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "Course",
            "name": "Самостоятельный запуск Shopify",
            "description": "Полный материал для самостоятельного запуска Shopify-магазина по проверенной системе. Включает полный материал системы, структуру запуска, логику работы и Zoom-созвон.",
            "provider": { "@type": "Person", "name": "Екатерина Булгакова" },
            "courseMode": "online",
            "inLanguage": "ru",
            "offers": { "@type": "Offer", "price": "73000", "priceCurrency": "RUB", "availability": "https://schema.org/InStock" }
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@type": "Course",
            "name": "Наставничество по Shopify",
            "description": "2 месяца полного сопровождения с нуля до результата. Личный разбор проекта, регулярные Zoom-созвоны, контроль и корректировка на каждом этапе.",
            "provider": { "@type": "Person", "name": "Екатерина Булгакова" },
            "courseMode": "online",
            "inLanguage": "ru",
            "offers": { "@type": "Offer", "price": "197000", "priceCurrency": "RUB", "availability": "https://schema.org/InStock" }
          }
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Это вообще реально с нуля? У меня нет опыта",
          "acceptedAnswer": { "@type": "Answer", "text": "Да, можно с нуля. Система выстроена так, что ты проходишь путь по шагам — от регистрации до запуска. Но важно понимать: результат зависит не от «опыта», а от того, насколько ты реально внедряешь." }
        },
        {
          "@type": "Question",
          "name": "Сколько времени занимает выйти на первые деньги?",
          "acceptedAnswer": { "@type": "Answer", "text": "В партнёрстве первые результаты могут появляться уже в первые недели запуска. Есть кейсы, где люди выходят на первые несколько тысяч долларов достаточно быстро." }
        },
        {
          "@type": "Question",
          "name": "В чём разница между партнёрством и наставничеством?",
          "acceptedAnswer": { "@type": "Answer", "text": "Партнёрство — быстрый вход в готовую систему. Наставничество — полный разбор с нуля. Ты не просто запускаешь магазин, а понимаешь, как всё устроено и как повторять результат дальше." }
        },
        {
          "@type": "Question",
          "name": "Это дропшипинг? И вообще это сейчас работает?",
          "acceptedAnswer": { "@type": "Answer", "text": "Да, в том числе дропшипинг. Но ты работаешь с международным рынком, а не локальным. И именно за счёт этого модель остаётся актуальной и даёт результат." }
        },
        {
          "@type": "Question",
          "name": "А если у меня не получится?",
          "acceptedAnswer": { "@type": "Answer", "text": "Главный вопрос — не «получится или нет», а будешь ли ты делать. Система уже проверена. Если ты готов включаться — результат вопрос времени." }
        }
      ]
    }
  ];

  schemas.forEach(function (data) {
    var s = document.createElement("script");
    s.type = "application/ld+json";
    s.text = JSON.stringify(data);
    document.head.appendChild(s);
  });
})();
