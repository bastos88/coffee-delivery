# Checkout Mobile Accessibility & Responsiveness — 2026-03-27

Resumo
------
Objetivo: corrigir problemas de responsividade no formulário de checkout e elevar a acessibilidade e legibilidade para conformidade mínima WCAG 2.1 AA.

Mudanças realizadas (implementação inicial)
-----------------------------------------
- Adicionei `label` acessíveis com `id`/`htmlFor` aos campos do formulário para leitores de tela, preservando o layout visual com uma classe `.sr-only`.
- Ajustei estilos em `src/pages/Checkout/Form/styles.ts`: aumentei o tamanho de fonte de inputs em mobile, melhorei contraste do texto dos inputs (usa `base-text`), defini `::placeholder` com `base-label`, e adicionei `:focus-visible` com anel claro para navegadores compatíveis.
- Tornei os campos de CEP/UF responsivos usando `clamp()`/larguras fixas onde apropriado e garanti que linhas `.row` quebrem em coluna em telas <=480px.
- No `Payment`: corrigi a acessibilidade das opções de pagamento — os inputs radio agora são focáveis (visually-hidden em vez de `display:none`) e possuem `name` + `onChange` para suportar navegação por teclado e leitores de tela. Também adicionei `:focus-within` em labels para indicar foco.
- Ajustei `src/styles/global.ts` para usar `font-weight: 400` e `line-height: 1.4` por padrão para melhor legibilidade.

Checklist (válido para próxima verificação)
-----------------------------------------
- [ ] Testar com Lighthouse e axe (scripts locais ou extensão).  
- [ ] Navegação apenas por teclado: tabulação até cada campo, opção de pagamento, e botões.  
- [ ] Testar zoom 200% (browser) e verificar wrap/reflow.  
- [ ] Teste visual em larguras comuns de mobile: 320px, 360px, 412px, 768px.  
- [ ] Verificar contraste para texto normal >= 4.5:1 (se falhar, considerar ajustar `theme` colors).  

Próximos passos recomendados
---------------------------
1. Executar auditoria automatizada (axe/lighthouse) e colar resultados/erros críticos aqui.  
2. Se algum contraste estiver abaixo de 4.5:1, atualizar `src/styles/themes/default.ts` para escurecer `base-label`/`base-input` conforme necessário.  
3. Opcional: tornar labels visíveis (não só sr-only) para melhorar usabilidade, caso o design permita.  
4. Testes com leitores de tela (NVDA/VoiceOver) para verificar ordem de leitura e `aria-describedby` do campo Complemento.

Notas de implementação
----------------------
- As alterações foram feitas para minimizar impacto visual: os `label` são `sr-only` por padrão, então a aparência atual do formulário deve permanecer semelhante.
- O componente `Payment` antes escondia os radios com `display:none`. Isso impedia foco e leitura por leitores de tela — foi substituído por uma técnica de "visually-hidden" que mantém a acessibilidade.

Arquivo(s) alterado(s)
----------------------
- `src/pages/Checkout/Form/index.tsx`
- `src/pages/Checkout/Form/styles.ts`
- `src/pages/Checkout/Payment/index.tsx`
- `src/pages/Checkout/Payment/styles.ts`
- `src/styles/global.ts`

Se quiser, executo agora os testes automáticos (Lighthouse/axe) ou continuo aplicando ajustes de contraste no `theme`.
