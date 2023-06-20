Все кинотеатры: http://localhost:3001/api/cinemas-  
Response:
```
[ 
    {
        "id": string, //"CTfrB5PGEJHBwxCNlU4uo",
        "name": string, //"Синема сад",
        "movieIds": string[] //[ "2aT976Fs_Bek0e2ZR_05V", "9t2dPgRBgWpmOXRXK5l4Q", "We79XlVI0Y-XshFxZD6Nv", "ab4FWj-OOXyskLN1jhHh5"]
    },
    ...
]
```

Все фильмы: http://localhost:3001/api/movies ;  
Фильмы в конкретном кинотеатре http://localhost:3001/api/movies?cinemaId={айдишка кинотеатра} ;  
Конкретный фильм - http://localhost:3001/api/movie?movieId={айдишка фильма} (Response 1 - объект) -  
Response:
```
[ 
    {
        "title": "Властелин колец: Братство Кольца",
        "posterUrl": "https://i.postimg.cc/pdCLNMqX/1.webp",
        "releaseYear": 2001,
        "description": "Сказания о Средиземье — это хроника Великой войны за Кольцо, длившейся не одну тысячу лет. Тот, кто владел Кольцом, получал неограниченную власть, но был обязан служить злу.Тихая деревня, где живут хоббиты. Придя на 111-й день рождения к своему старому другу Бильбо Бэггинсу, волшебник Гэндальф начинает вести разговор о кольце, которое Бильбо нашел много лет назад. Это кольцо принадлежало когда-то темному властителю Средиземья Саурону, и оно дает большую власть своему обладателю. Теперь Саурон хочет вернуть себе власть над Средиземьем. Бильбо отдает Кольцо племяннику Фродо, чтобы тот отнёс его к Роковой Горе и уничтожил.",
        "genre": "fantasy",
        "id": "2aT976Fs_Bek0e2ZR_05V",
        "rating": 8,
        "director": "Питер Джексон",
        "reviewIds": [
            "M0bg9QY5gVtupNaglrmua",
            "w32kK5oV6UIr1ZHdkkMAn"
        ]
    },
    ...
]
```

Вct отзывы: http://localhost:3001/api/reviews ;  
Отзывы конкретного фильма http://localhost:3001/api/reviews?movieId={айдишка фильма} (1 объект)  
Response:
```
[
    {
        "id": "6iaV-jUSjfl-gGk8EOdQ1",
        "name": "Андрей",
        "text": "Фильм хороший, но сюжет немного затянут",
        "rating": 7
    },
    ...
]
```