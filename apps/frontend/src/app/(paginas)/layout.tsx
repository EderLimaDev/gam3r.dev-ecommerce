import Pagina from '@/components/templates/Pagina'
import { ProvedorCarrinho } from '@/data/context/ContextoCarrinho'
import { ProvedorPagamento } from '@/data/context/ContextoPagamento'
import { ProvedorProdutos } from '@/data/context/ContextoProdutos'

export default function Layout(props: any) {
    return (
        <ProvedorProdutos>
            <ProvedorCarrinho>
                <ProvedorPagamento>
                    <Pagina>{props.children}</Pagina>
                </ProvedorPagamento>
            </ProvedorCarrinho>
        </ProvedorProdutos>
    )
}
