// Função para converter números em letras
function numeroParaPalavra(num) {
    const palavras = [
        "0 Mi", "10 Mi", "20Mi", "30 Mi", "44 Mi", "50 Mi",
        "58 Mi", "70 Mi", "80 Mi", "90 Mi", "100 Mi", "115 Mi", "120 Mi",
        "130 Mi", "140M", "150 Mi", "160 Mi", "170 Mi",
        "180 Mi", "190 Mi", "200 Mi"
    ];
    return palavras[num] || num.toString(); // Retorna o número como string se não estiver na lista
}

const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Furtnite', 'Minecraft', 'Terraria', 'Roblox', 'League Of Legends'],
        datasets: [{
            label: 'Pessoas que jogam',
            data: [4, 14, 6, 20, 11], // Números originais
            backgroundColor: [
                'rgba(1, 75, 160, 0.2)', // Vermelho
                'rgba(1, 75, 160, 0.2)', // Azul
                'rgba(1, 75, 160, 0.2)', // Amarelo
                'rgba(1, 75, 160, 0.2)', // Verde-água
                'rgba(1, 75, 160, 0.2)' // Roxo
            ],
            borderColor: [
                'rgba(1, 75, 160, 1)', // Vermelho
                'rgba(1, 75, 160, 1)', // Azul
                'rgba(1, 75, 160, 1)', // Amarelo
                'rgba(1, 75, 160, 1)', // Verde-água
                'rgba(1, 75, 160, 1)' // Roxo
            ],
            borderWidth: 1,
            datalabels: {
                anchor: 'end',
                align: 'end',
                formatter: (value) => numeroParaPalavra(value), // Converte os números em palavras
                color: '#014ba0' // Cor vermelha para os rótulos de dados
            }
        }]
    },
    options: {
        plugins: {
            datalabels: {
                display: true,
                color: 'red', // Cor do texto dos rótulos
                font: {
                    weight: 'bold'
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: '#014ba0  ' // Cor vermelha para os rótulos dos meses
                },
                title: {
                    display: true,
                    text: 'Jogos',
                    color: '#014ba0'
                }
            },
            y: {
                beginAtZero: true,
                ticks: {
                    color: '#014ba0', // Cor vermelha para os rótulos dos números
                    callback: function(value) {
                        return numeroParaPalavra(value); // Substitui os números por palavras
                    }
                },
                title: {
                    display: true,
                    text: 'Pessoas que jogam',
                    color: '#014ba0'
                }
            }
        },
        layout: {
            padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            }
        },
        elements: {
            bar: {
                borderWidth: 2, // Espessura das bordas das barras
                borderSkipped: 'bottom' // Impede a borda embaixo das barras
            }
        }
    },
    plugins: [ChartDataLabels] // Inclui o plugin
});
