const TemplateExpressions = () => {

    const name = "Patrick"
    const data = {
        age: 27,
        job: "Programmer"
    }

    return (
        <div>
            <h1>Olá {name}, tudo bem?</h1>
            <p>Você atua como: { data.job}</p>
        </div>
    )
}

export default TemplateExpressions