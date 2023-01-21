import './global.css'

import styles from './App.module.css'

import { Header } from './components/Header'
import { Todo } from './components/Todo'


export function App() {

  return (
    <div className={styles.wrapper}>
      <Header />

      <Todo />
    </div>
  )
}
