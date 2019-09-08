import React from 'react';
import {MdAddShoppingCart} from  'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img src="https://imgcentauro-a.akamaihd.net/180x180/93457831.jpg" alt="Tênis" />
        <strong>Tênis muito legal</strong>
        <span>R$ 129,90</span>

        <button type="button" >
          <div>
            <MdAddShoppingCart size={16} color="#FFF"/> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img src="https://imgcentauro-a.akamaihd.net/180x180/93457831.jpg" alt="Tênis" />
        <strong>Tênis muito legal</strong>
        <span>R$ 129,90</span>

        <button type="button" >
          <div>
            <MdAddShoppingCart size={16} color="#FFF"/> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img src="https://imgcentauro-a.akamaihd.net/180x180/93457831.jpg" alt="Tênis" />
        <strong>Tênis muito legal</strong>
        <span>R$ 129,90</span>

        <button type="button" >
          <div>
            <MdAddShoppingCart size={16} color="#FFF"/> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img src="https://imgcentauro-a.akamaihd.net/180x180/93457831.jpg" alt="Tênis" />
        <strong>Tênis muito legal</strong>
        <span>R$ 129,90</span>

        <button type="button" >
          <div>
            <MdAddShoppingCart size={16} color="#FFF"/> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img src="https://imgcentauro-a.akamaihd.net/180x180/93457831.jpg" alt="Tênis" />
        <strong>Tênis muito legal</strong>
        <span>R$ 129,90</span>

        <button type="button" >
          <div>
            <MdAddShoppingCart size={16} color="#FFF"/> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img src="https://imgcentauro-a.akamaihd.net/180x180/93457831.jpg" alt="Tênis" />
        <strong>Tênis muito legal</strong>
        <span>R$ 129,90</span>

        <button type="button" >
          <div>
            <MdAddShoppingCart size={16} color="#FFF"/> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}
