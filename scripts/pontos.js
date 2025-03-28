class Pontos extends Animacao {
    constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, velocidade, delay) {
        super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite);

        this.variacaoY = variacaoY;

        this.velocidade = velocidade;
        this.delay = delay;
        this.x = width + this.delay;
    }

    colideComInvencivel() {
        return true;
    }

    move() {
        this.x -= this.velocidade;

        if(this.x < -this.largura) {
            this.reinicializa();
        }
    }

    reinicializa() {
        this.x = width + this.delay;
    }
}

class Pontuacao {
    constructor() {
        this.pontos = 0;
    }

    exibe() {
        textAlign(RIGHT);
        fill('#FFFFFF');
        textSize(50);
        text(parseInt(this.pontos), width - 30, 50);
    }

    adicionarPonto() {
        this.pontos += 1;
        somLamp.play();
        
        if(this.pontos >= 200) {
            somJogo.stop();
            cenaAtual = 'telaFinal';
            somVitoria.play();
        }
    }
    
}



