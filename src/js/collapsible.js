export class Collapsible {
  #collapsibleContents;
  constructor() {
    this.collapsibleElement = document.createElement("div");
    this.collapsibleText = document.createElement("div");
    this.#collapsibleContents = [
      {
        text: "Внезапно, ключевые особенности структуры проекта формируют глобальную экономическую сеть и при этом — объявлены нарушающими общечеловеческие нормы этики и морали. В рамках спецификации современных стандартов, представители современных социальных резервов, превозмогая сложившуюся непростую экономическую ситуацию, рассмотрены исключительно в разрезе маркетинговых и финансовых предпосылок. Равным образом, курс на социально-ориентированный национальный проект говорит о возможностях распределения внутренних резервов и ресурсов.",
      },
      {
        text: "Повседневная практика показывает, что убеждённость некоторых оппонентов, в своём классическом представлении, допускает внедрение системы обучения кадров, соответствующей насущным потребностям. С другой стороны, разбавленное изрядной долей эмпатии, рациональное мышление предоставляет широкие возможности для своевременного выполнения сверхзадачи!",
      },
    ];
  }

  showCollapsible(text, element) {
    this.collapsibleElement.append(this.collapsibleText);
    this.collapsibleElement.classList.add("collapsible");
    this.collapsibleText.classList.add("collapsible-text");
    this.collapsibleText.textContent = this.#collapsibleContents[text].text;
    element.parentElement.appendChild(this.collapsibleElement);
  }

  closeCollapsible() {
    this.collapsibleElement.classList.add("collapsed");
    setTimeout(() => this.collapsibleElement.remove(), 1000);
    setTimeout(
      () => this.collapsibleElement.classList.remove("collapsed"),
      1000
    );
  }
}
