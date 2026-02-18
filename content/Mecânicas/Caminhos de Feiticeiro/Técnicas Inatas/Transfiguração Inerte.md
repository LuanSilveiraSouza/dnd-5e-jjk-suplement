**Atributo de Conjuração**: Escolha entre Carisma e Sabedoria
**DC de Energia Amaldiçoada**: 8 + Atributo de Conjuração + Bônus de Proficiência

## Transfiguração

Nível 1

No 1º nível, seu toque pode alterar o próprio ser de uma criatura — sua alma. Sempre que você atingir uma criatura com uma arma natural, ataque desarmado ou ao tocá-la, ela sofre 1d6 de dano necrótico adicional.

Como uma ação, por 1 Energia Amaldiçoada, você pode forçar uma criatura ao seu alcance a realizar um teste de resistência de Constituição. Em caso de falha, ela sofre 1d10 de dano necrótico. O dano aumenta para 2d10 no 5º nível, 3d10 no 9º nível, 4d10 no 13º nível e 5d10 no 17º nível. Em caso de sucesso, sofre metade do dano.

Se o dano necrótico causado por qualquer característica de sua Transfiguração Ociosa reduzir uma criatura a 0 pontos de vida, ela se torna uma de suas **Criaturas Transfiguradas**. Isso não funciona em Construtos.

### Criaturas Transfiguradas

Você pode ter um número de criaturas transfiguradas igual ao seu nível multiplicado pelo seu Bônus de Proficiência. Todas obedecem às suas ordens e passam a ser do tipo morto-vivo.

Durante um descanso, você pode modificar o seguinte:

**Tamanho.** Pode variar de Minúsculo a Enorme.

**Atributos.** Os atributos permanecem os mesmos, mas os mentais são reduzidos para 4. Os pontos removidos podem ser redistribuídos nos atributos físicos, podendo ultrapassar o máximo normal.

**Primitividade.** Perdem todas as habilidades sobrenaturais (magias ou técnicas), não possuem proficiências, sua CA é 10 + modificador de Destreza, e só podem usar armas naturais ou ataques desarmados (1d6 de dano).

Dar ordens simples (como atacar) exige ação bônus; ordens complexas (como defender uma área) exigem ação.

Você pode armazenar suas criaturas transfiguradas dentro do próprio corpo, liberando qualquer quantidade delas como ação bônus.

---

## Alterações

Nível 3

No 3º nível, você pode alterar a si mesmo ou um aliado.

### Alteração em Aliados

Durante um descanso curto ou longo, você pode alterar uma criatura voluntária, concedendo um ou mais dos benefícios abaixo:

- **Olfato Aguçado:** vantagem em Percepção baseada em cheiro.
    
- **Audição Aguçada:** vantagem em Percepção baseada em audição.
    
- **Visão Aguçada:** vantagem em Percepção baseada em visão.
    
- **Visão no Escuro:** 18 metros (60 pés), ou +9 metros (30 pés) se já possuir.
    
- **Pele Endurecida:** resistência a dano contundente, cortante ou perfurante.
    
- **Brânquias:** deslocamento de natação igual ao de caminhada e capacidade de respirar debaixo d’água.
    

Você pode conceder a mesma criatura um número de alterações igual ao seu bônus de proficiência.

### Autoalteração

Como ação bônus, você pode modificar seu próprio corpo, escolhendo uma das opções:

- **Braços Espada (2 CE):** seu dano desarmado se torna cortante e conta como arma marcial leve. (Sem Mãos Espinhosas ou Asas)
    
- **Mãos Espinhosas (2 CE):** dano perfurante e dano adicional igual ao bônus de proficiência. (Sem Mãos Espinhosas ou Asas)
    
- **Braços-Escudo (3 CE):** +2 na CA. (Sem Asas)
    
- **Braços Longos (3 CE):** alcance +3 metros (10 pés). (Sem Asas)
    
- **Cascos (3 CE):** +3 metros (10 pés) de deslocamento e Disparada como ação bônus.
    
- **Pele Espinhosa (4 CE):** ao sofrer dano corpo a corpo contundente, cortante ou perfurante, pode usar reação para causar dano perfurante igual ao bônus de proficiência.
    
- **Asas (4 CE):** deslocamento de voo 18 metros (60 pés); se estiver a pelo menos 4,5 metros (15 pés) do chão, +2 na CA. (Sem Mãos Espinhosas, Braços Espada, Braços-Escudo ou Braços Longos)
    

---

## Clone Corporal

Nível 6

No 6º nível, como ação por 6 Energias Amaldiçoadas, você cria um clone quase perfeito de si mesmo com metade dos seus pontos de vida máximos e metade da sua Energia Amaldiçoada máxima.

Ele age no seu turno, é controlado por você, e você pode ver e ouvir através dele. O clone não pode usar características de Técnica Inata, exceto Autoalteração.

Você não pode criar outro clone até que o anterior morra ou seja reabsorvido por você ao tocá-lo, recuperando os valores restantes de PV e Energia Amaldiçoada.

---

## Multiplicidade da Alma

Nível 10

No 10º nível, como ação por 5 Energias Amaldiçoadas, você pode fundir 2 ou mais Criaturas Transfiguradas, gerando um dos efeitos:

**Repulsão Corporal.** Dispara uma barragem de criaturas a alta velocidade. Faça um ataque de Energia Amaldiçoada com alcance 18/36 metros (60/120 pés), causando 5d8 de dano necrótico. Cada criatura adicional adiciona +1d8 ao dano.

**Isômero Polimórfico da Alma.** Você cria um Isômero Polimórfico da Alma. Pode gastar 5 Energias Amaldiçoadas adicionais para adicionar mais uma criatura à fusão (mínimo 2). Cada criatura conta como uma alma.

```statblock  
name: Isômero de Alma Polimórfica  
size: Médio  
type: Morto-Vivo  
subtype:  
alignment: Sem alinhamento  
ac: 14 (Armadura Natural)  
hp: 90
hit_dice: 20d8  
speed: 100ft.  
stats: [18, 18, 10, 4, 4, 4]  
damage_immunities: Necrótico  
condition_immunities: Encantado, Amedrontado  
senses: Percepção Passiva 10
languages: -
cr: N/A 
traits:  
- [Incompatibilidade de Alma, "Para cada alma usada na criação do Isômero, ele recebe +1 de força e -5 de HP total. Para cada 5 almas, seu dado de Pancada aumenta um tier. Se ele chegar a 0 de HP por conta deste traço, ele morre."]  
actions:  
- [Multiataque, "O Isômero ataca duas vezes."]  
- [Pancada, "Ataque Corpo a Corpo; +X ao acerto; alcance 5ft.; Um alvo; 1d10 (quantidade de acordo com o número de almas) + mod Força de dano contundente. X = mod Força + Bônus de Proficiência + metade das almas usadas."]
```


---

## Transfiguração Remota

Nível 13

Você dominou sua percepção da alma a tal ponto que, ao tocar um humano, pode marcar sua alma com uma pequena quantidade latente de Energia Amaldiçoada por tempo ilimitado, permitindo transfigurá-lo à distância.

---

## Despertar

Nível 13

Ao usar Alteração em Aliados em um Não-Feiticeiro, você pode realizar um teste de Energia Amaldiçoada CD 15 para determinar se ele possui uma Técnica Inata latente.

Em caso de sucesso, pode gastar 10 Energias Amaldiçoadas para despertar a técnica, que se desenvolve ao longo de 1d4+1 dias.

---

## Máxima: Corpo Espiritual da Matança Distorcida

Nível 13

Como ação, por 10 Energias Amaldiçoadas, você molda corpo e alma em uma forma ideal para matar por 10 minutos.

Sua CA não pode ser inferior a 25. Você ganha Lâminas de Cotovelo (armas simples corpo a corpo nas quais é proficiente) que causam 1d12 + Bônus de Proficiência de dano perfurante.

Ao atacar com as Lâminas de Cotovelo, pode gastar 1 Energia Amaldiçoada para ganhar vantagem e aumentar o alcance para 4,5 metros (15 pés), projetando a lâmina até o alvo.

---

## Expansão de Domínio: Autoencarnação da Perfeição

Nível 18

No 18º nível, você domina sua técnica suprema. Cria uma dimensão repleta de partes do seu corpo, tornando a fuga da morte praticamente impossível.

Na iniciativa 20, todas as criaturas dentro do domínio sofrem o dano do seu toque de Transfiguração rolado duas vezes.
