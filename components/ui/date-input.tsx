'use client'

import * as React from 'react'
import { CalendarIcon } from 'lucide-react'
import { format } from 'date-fns'
import { id as idLocale } from 'date-fns/locale'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Input } from '@/components/ui/input'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

interface DateInputProps {
  value?: Date
  onChange?: (date: Date | undefined) => void
  placeholder?: string
  disabled?: boolean
  className?: string
}

const DateInput = React.forwardRef<HTMLInputElement, DateInputProps>(
  (
    {
      value,
      onChange,
      placeholder = 'Pilih tanggal',
      disabled = false,
      className,
    },
    ref,
  ) => {
    const [open, setOpen] = React.useState(false)
    const [displayValue, setDisplayValue] = React.useState<string>('')

    React.useEffect(() => {
      if (value) {
        setDisplayValue(format(value, 'd MMM yyyy', { locale: idLocale }))
      } else {
        setDisplayValue('')
      }
    }, [value])

    const handleSelect = (date: Date | undefined) => {
      onChange?.(date)
      setOpen(false)
    }

    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <div className={cn('relative w-full', className)}>
            <Input
              ref={ref}
              type="text"
              placeholder={placeholder}
              value={displayValue}
              readOnly
              disabled={disabled}
              className={cn(
                'cursor-pointer pr-10',
                disabled && 'opacity-50 cursor-not-allowed',
              )}
            />
            <CalendarIcon className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground pointer-events-none" />
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={value}
            onSelect={handleSelect}
            disabled={disabled}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    )
  },
)

DateInput.displayName = 'DateInput'

export { DateInput }
