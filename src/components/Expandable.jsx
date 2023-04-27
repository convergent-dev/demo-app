import { createContext, useContext, useState } from 'react'
import { ArrowDownIcon } from '@/components/ArrowDownIcon'

const ExpandableContext = createContext({
  isExpanded: false,
  setIsExpanded: () => {},
})

export function Expandable({ children }) {
  let [isExpanded, setIsExpanded] = useState(false)

  return (
    <ExpandableContext.Provider
      value={{
        isExpanded,
        expand: () => {
          setIsExpanded(true)
        },
      }}
    >
      {children({ isExpanded })}
    </ExpandableContext.Provider>
  )
}

Expandable.Button = function Button({ children }) {
  let { isExpanded, expand } = useContext(ExpandableContext)

  return (
    !isExpanded && (
      <div className="mt-10 flex justify-center">
        <button
          type="button"
          className="flex items-center text-base font-medium tracking-tight text-slate-900 hover:text-slate-700"
          onClick={expand}
        >
          {children}
          <ArrowDownIcon className="ml-2 h-6 w-6" />
        </button>
      </div>
    )
  )
}
