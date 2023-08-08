export abstract class View<T> {
    
    protected elemento: HTMLElement
    private escapar = false

    constructor(seletor: string) {
        const elemento = document.querySelector(seletor)
        if (elemento) {
            this.elemento = elemento as HTMLInputElement
        } else {
            throw new Error(`Seletor ${seletor} não existe no DOM. Verifique com o desenvolvedor.`)
        }
    }
    
    public update(model: T): void {
        let template = this.template(model)
        this.elemento.innerHTML = template
    }

    protected abstract template(model: T): string 
}