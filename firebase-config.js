// ============================
// FIREBASE CONFIGURATION
// ============================

const firebaseConfig = {
  apiKey: "AIzaSyBBQgQf463nSvhOU85Eieb2GNwh0cvx_xc",
  authDomain: "instituto-meta-4c58e.firebaseapp.com",
  projectId: "instituto-meta-4c58e",
  storageBucket: "instituto-meta-4c58e.firebasestorage.app",
  messagingSenderId: "646204904910",
  appId: "1:646204904910:web:ef79be39e6e25de81dc79f",
  measurementId: "G-RLPBM9J1KX"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

// ============================
// FUNÇÕES DE AUTENTICAÇÃO
// ============================

function loginUsuario(email, senha) {
    return auth.signInWithEmailAndPassword(email, senha);
}

function logoutUsuario() {
    return auth.signOut();
}

function verificarAutenticacao() {
    return new Promise(function(resolve) {
        auth.onAuthStateChanged(function(user) {
            resolve(user);
        });
    });
}

// ============================
// FUNÇÕES CRUD - ALUNOS
// ============================

function adicionarAlunoFirebase(aluno) {
    return db.collection('alunos').add(aluno);
}

function buscarAlunosFirebase() {
    return db.collection('alunos').orderBy('nome').get();
}

function buscarAlunoPorCpfFirebase(cpf) {
    return db.collection('alunos').where('cpf', '==', cpf).get();
}

function atualizarAlunoFirebase(id, dados) {
    return db.collection('alunos').doc(id).update(dados);
}

function deletarAlunoFirebase(id) {
    return db.collection('alunos').doc(id).delete();
}

// ============================
// FUNÇÕES CRUD - MATÉRIAS
// ============================

function adicionarMateriaFirebase(materia) {
    return db.collection('materias').add(materia);
}

function buscarMateriasFirebase() {
    return db.collection('materias').orderBy('nome').get();
}

function atualizarMateriaFirebase(id, dados) {
    return db.collection('materias').doc(id).update(dados);
}

function deletarMateriaFirebase(id) {
    return db.collection('materias').doc(id).delete();
}

// ============================
// CRIAR MATÉRIAS PADRÃO AUTOMATICAMENTE
// ============================

function criarMateriasPadrao() {
    console.log('📚 Verificando matérias padrão...');
    
    var materiasPadrao = [
        'Artes', 'Educação Física', 'Filosofia', 'Sociologia', 'Inglês',
        'Física', 'Química', 'Biologia', 'Geografia', 'História',
        'Matemática', 'Língua Portuguesa'
    ];
    
    // Buscar matérias existentes
    db.collection('materias').get()
        .then(function(snapshot) {
            var materiasExistentes = [];
            snapshot.forEach(function(doc) {
                materiasExistentes.push(doc.data().nome);
            });
            
            console.log('📋 Matérias existentes:', materiasExistentes);
            
            // Adicionar apenas as que não existem
            var adicionadas = 0;
            materiasPadrao.forEach(function(nome) {
                if (!materiasExistentes.includes(nome)) {
                    db.collection('materias').add({
                        nome: nome,
                        apostilas: [],
                        videos: [],
                        testes: [],
                        criadoEm: firebase.firestore.FieldValue.serverTimestamp()
                    }).then(function() {
                        adicionadas++;
                        console.log('✅ Matéria criada:', nome);
                    }).catch(function(error) {
                        console.error('❌ Erro ao criar matéria:', nome, error);
                    });
                }
            });
            
            if (adicionadas > 0) {
                console.log('📚 ' + adicionadas + ' matérias adicionadas!');
            } else {
                console.log('✅ Todas as matérias já existem.');
            }
        })
        .catch(function(error) {
            console.error('❌ Erro ao verificar matérias:', error);
        });
}

// Criar matérias após 2 segundos
setTimeout(function() {
    criarMateriasPadrao();
}, 2000);

console.log('✅ Firebase configurado com sucesso!');
console.log('📁 Projeto:', firebaseConfig.projectId);