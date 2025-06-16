import { openDB } from "idb"

const dbName = 'fileIndexedDB'
const storeName = 'fileStore'

export const getDB = () => {
  let version = 1
  return openDB(dbName, version, {
    upgrade (db) {
      if (!db.objectStoreNames.contains(storeName)) {
        db.createObjectStore(storeName, {
          keyPath: 'key'
        })
      }
    }
  })
}

export const saveToDB = async (key, value) => {
  
  try {
    const db = await getDB()
    await db.put(storeName, {key, value})
  } catch (err) {
    console.log(err)
  }
}

export const getFromDB = async (key) => {
  const db = await getDB()
  const data = await db.get(storeName, key)
  return data ? data.value : null
}

export const getAllRows = async () => {
  const db = await getDB()
  const allData = await db.getAll(storeName)
  return allData
}

export const deleteRow = async (key) => {
  const db = await getDB()
  
  let result = await db.delete(storeName, key)

  return result
}