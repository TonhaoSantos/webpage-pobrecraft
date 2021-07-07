<template>
  <div class="row home">
    <div class="col-xs-12 col-md-offset-2 col-md-8">

      <br><br>

      <div>
        <p class="home__title" style="text-align: center;">GALERA</p>
        <p>Com o intuito de unir os Youtubers estamos produzindo um conteúdo survival family friend!</p>
        <p>O nome é Pobre Craft.</p>
        <p>Estamos reunindo Youtubers que tenham compromisso com gravações!</p>
        <p>Pelo menos  uma ou duas gravações semanais.</p>
        <p>Lá teremos um reino onde o rei da TOP CRAFT enviará missões, pelo menos duas missões semanais entregues na porta do castelo 🏰.</p>
        <p>Alguns Youtubers estão ajudando na construção de lojas no realms para ter uma melhor qualidade de jogo!</p>
        <p>Enfim, o intuito é conseguir pessoas para jogarmos juntos, Youtubers que tenham compromisso com o trabalho!</p>
        <p>Ideias serão aceitas, precisamos melhorar no que for preciso.</p>
      </div>

      <h5 class="home__subtitle">Realm</h5>

      <p>Para entrar no Realm basta utilizar o link ou usar o código:</p>
      <ul style="padding-left: 50px">
        <li>link: <a href="https://realms.gg/sAnpFd7ADtM" target="_blank">https://realms.gg/sAnpFd7ADtM</a></li>
        <li>código: sAnpFd7ADtM</li>
      </ul>

      <br>

      <h5 class="home__subtitle">WhatsApp</h5>
      <p>Para divulgar videos e lives referentes ao conteúdo da serie, podemos utilizar o grupo desta finalidade <a href="https://chat.whatsapp.com/FSWhxjBv0Bv2uVWxl2RVHt" target="_blank">https://chat.whatsapp.com/FSWhxjBv0Bv2uVWxl2RVHt</a>.</p>
      <p>Para poder postar é preciso ser AMD, se você não possui este cargo solicite com outro ADM no nosso grupo interno.</p>
      <p>E muito importante deixar claro para os inscritos que os vídeos novos serão divulgados aqui neste grupo!</p>
      <p>Quando for postar, postar com a sua Thumb, desta forma fica mais atraente a publicação.</p>
      <p><strong>Somente live e videos da serie.</strong></p>

      <br>

      <h5 class="home__subtitle">Intro</h5>
      <p>Temos uma intro que deve ser utilizada em todos os videos da serie, e caso seja possível nas lives também.</p>
      <p>Para baixar é só clicar <a href="https://mega.nz/folder/CbwGXAga#1mDuqoDSyAV1OlLm5QOp7w" target="_blank">aqui</a>.</p>

      <br>

      <h5 class="home__subtitle">Descrição</h5>
      <p>Abaixo temos um texto de como será a descrição de cada vídeo, onde todos devem colocar os parceiros que estão participando!</p>
      <pre>
      Série muito OP dos Youtubers Pobres
        O Rei está revoltado cobrando mais e mais impostos da galera!

        Aqui os youtubers estão se unindo para pagar tudo que a realeza pede ! Toda semana novas missões na série PobreCraft. Uma sátira muito organizada, porém pobre.

        Nós não somos topCrafters, mas POBRECRAFTERS.

        POBRECRAFT - Toda semana teremos vídeos.

        Se você é youtuber e caso queira participar da série, envie email para
        tiagomed@hotmail.com

        Versão Minecraft: 1.17.2

        Participantes
        https://www.youtube.com/mineirim     - Mineirim
        https://www.youtube.com/newplayerehp - New Player EHP
        https://www.youtube.com/c/DyowGamer  - DyowGamer
        https://youtube.com/c/JVVMYT - JVVM
        https://encurtador.com.br/blrBR - MineMagic
        https://encurtador.com.br/rtAGL - TioZé
        https://www.youtube.com/TonhaoSantos - TonhaoSantos
        https://www.youtube.com/coderfelipe - Coder Felipe
        https://www.youtube.com/c/GPaulo1k - G Paulo
        https://youtube.com/c/DAOplaybora1k - D.A.O play
        https://m.youtube.com/c/PalomaSantos - Paloma Santos
        https://www.youtube.com/c/RevoltZi - Revolt Z
        https://encurtee.me/jnlwr - Newton Gamer Oficial
        https://www.youtube.com/c/Rafagame - Rafa Game

        #minecraft #pobrecraft #minecraftbedrock
      </pre>

      <br>

      <h5 class="home__subtitle">Estamos montando ainda (ideia de alguem do grupo e ja foi aceita)</h5>

      <p>Não precisa criar um dinheiro no jogo, podemos só deixar em um lugar público os valores de cada minério e por semana o rei pede um valor de imposto</p>
      <p>E pode pedir junto com o imposto alguns blocos de construção pra obrigar o pessoal a pegar blocos</p>
      <pre>
        Poderia colocar uma tabela:
        Pack de terra: 5
        Pack de cobblestone: 7
        Pack de pedra: 10
        Pack de madeira: 7
        Cada ferro: 25
        Cada ouro: 30
        Cada cobre: 20
        Bloco de redstone: 25
        Bloco de lapislazule: 30
        Ametista: 20
        Esmeralda:50
        Dima:100
      </pre>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Home'
})
</script>

<style lang="scss" scoped>
.home {
  margin-bottom: 40px;

  .home__title {
    font-weight: 900;
    text-transform: uppercase;
    font-family: 'Lato Regular';
    color: #5f34ff;
    text-align: center;
  }

  .home__subtitle {
    margin: 40px 0 0;
    font-weight: 900;
    margin-bottom: 27px;
    text-transform: uppercase;
    font-family: 'Lato Regular';
    color: #5f34ff;
    text-align: left;
  }

  .home__list {
    text-align: left;
    padding: 0;

    .rules__list-item {

    }
  }
}
</style>
