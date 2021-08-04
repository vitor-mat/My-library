import { Container } from "./style"

export function Home(){
    return(
    <Container>
        <aside>
            <span>
                <h1>Seja Bem-vindo a sua biblioteca virtual</h1>
            </span>
            <span>
                <p>Aqui você poderá organizar as suas leituras, salvando os livros com seus link ou simplesmente a página aonde parou de ler</p>
            </span>
        </aside>
        <section>
            <span>
                <h1>My library</h1>
            </span>
            <div>
                <button className="btn-index" id="btn-google">Entre com o google</button>
            </div>
        </section>
      </Container>
    )
}