"use client";

import Link from "next/link";
import React from "react";

import styled from "./index.module.css";

function Footer() {
    return (
        <footer className={styled.footer}>
            <Link href="/qna">Вопросы-ответы</Link>
            <Link href="/about">О нас</Link>
        </footer>
    );
}

export { Footer };
