import './global.css'

import styles from './App.module.css'

import { Header } from './components/Header'
import { Todo } from './components/Todo'
import { Task } from './components/Task'

export function App() {

  return (
    <div className={styles.wrapper}>
      <Header />

      <Todo />
    </div>
  )
}
