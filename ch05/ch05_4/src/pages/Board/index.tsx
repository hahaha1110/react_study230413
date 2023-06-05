import { useCallback } from 'react'
import { Title } from '../../components'
import CreateListForm from './CreateListForm'
import BoardList from '../BoardList'
import * as LO from '../../store/listidOrders'
import * as L from '../../store/listEntities'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { AppState } from '../../store'
import { List } from '../../store/commonTypes'
import { useMemo } from 'react'
export default function Board() {
  const dispatch = useDispatch()

  const lists = useSelector<AppState, List[]>(
    ({ listidOrders, listEntities }) =>
      listidOrders.map(uuid => listEntities[uuid])
  )

  const onCreateList = useCallback(
    (uuid: string, title: string) => {
      const list = { uuid, title }
      dispatch(LO.addListidToOrders(list.uuid))
      dispatch(L.addList(list))
    },
    [dispatch]
  )
  const onRemoveList = useCallback(
    (listid: string) => () => {
      dispatch(L.removeList(listid))
      dispatch(LO.removeListidFromOrders(listid))
    },
    [dispatch]
  )
  const children = useMemo(
    () =>
      lists.map(list => (
        <BoardList
          key={list.uuid}
          list={list}
          onRemoveList={onRemoveList(list.uuid)}
        />
      )),
    [lists, onRemoveList]
  )
  return (
    <section className="mt-4">
      <Title>Board</Title>
      <div className="mt-4">
        {children}
        <CreateListForm onCreateList={onCreateList} />
      </div>
    </section>
  )
}
