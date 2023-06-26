"use client";

import { CardQA } from "@/components";
import EmptyBlock from "@/components/emptyBlock/EmptyBlock";
import React from "react";

import styles from "./index.module.css";

const qaList = [
    {
        question: "Когда был основан билетопоиск?",
        answer: "Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных видео и интересные факты, поставить фильмам оценки, написать рецензии и дополнить описание фильмов. А вообще ответ: cайт был создан 7 ноября 2003 года :)))",
    },
    {
        question: "Какой компании принадлежит Билетопоиск?",
        answer: "Компания принадлежит наверное «Яндексу».",
    },
    {
        question: "Как купить билет на Билетопоиск?",
        answer: "Зайти на сайт и нажать на «+».",
    },
    {
        question: "Как оставить отзыв на Билетопоиск?",
        answer: "Это даже мы не знаем.",
    },
];

function Page() {
    return (
        <div className={styles.qnaPage}>
            <EmptyBlock>
                <h2 className={styles.header}>Вопросы-ответы</h2>
            </EmptyBlock>
            <div className={styles.qaList}>
                {qaList.map((qa) => (
                    <CardQA {...qa} key={qa.question} />
                ))}
            </div>
        </div>
    );
}

export default Page;
