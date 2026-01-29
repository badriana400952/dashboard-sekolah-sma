'use client'

import {
  Select as RadixSelect,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select'
import { cn } from '@/lib/utils'

type SelectOption = {
  label: string
  value: string | number
}

type SelectSimpleProps = {
  data: SelectOption[]
  label?: string
  placeholder?: string
  className?: string
  onChange?: (value: string) => void
  defaultValue?: string
  value?: string
  required?: boolean
}

export function Selects({
  data,
  label,
  placeholder = 'Pilih',
  className,
  onChange,
  value,
  defaultValue,
  required,
}: SelectSimpleProps) {
  return (
    <div className="flex flex-col gap-1">
      {/* LABEL */}
      {label && (
        <label className="text-sm font-medium text-foreground">
          {label}
          {required && <span className="ml-1 text-red-500">*</span>}
        </label>
      )}

      <RadixSelect
        defaultValue={defaultValue}
        value={value}
        onValueChange={onChange}
      >
        <SelectTrigger className={cn('w-48', className)}>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>

        <SelectContent>
          {data.map((item: SelectOption) => (
            <SelectItem key={item.value} value={String(item.value)}>
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </RadixSelect>
    </div>
  )
}
