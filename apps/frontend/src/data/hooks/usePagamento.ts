import { useContext } from 'react'
import ContextoPagamento from '../context/ContextoPagamento'

const usePagamento = () => useContext(ContextoPagamento)
export default usePagamento
