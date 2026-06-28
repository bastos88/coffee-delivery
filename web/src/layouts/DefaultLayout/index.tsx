import { Outlet } from "react-router-dom";
import { LayoutContainer, Main } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

export function DefaultLayout() {
    return (
        <LayoutContainer>
            <Header />
            <Main>
                <Outlet />
            </Main>
            <Footer />
        </LayoutContainer>
    )
}