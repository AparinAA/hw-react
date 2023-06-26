"use client";

import React, { ReactNode } from "react";
import styled from "./index.module.css";

interface Props {
    children: ReactNode;
}

function Main({ children }: Props) {
    return <main className={styled.main}>{children}</main>;
}

export { Main };
