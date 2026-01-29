import React, { useState } from "react";
import { Box, Menu } from "@mantine/core";
import { DataTable, DataTableColumn, DataTableProps } from "mantine-datatable";

type ContextMenuItem<T> = {
  label: string;
  color?: string;
  icon?: React.ReactNode;
  onClick: (record: T) => void;
};

type ContextDataTableProps<T> = {
  columns: DataTableColumn<T>[] ;
  records: T[];
  contextMenuItems?: (record: T) => ContextMenuItem<T>[];
} & DataTableProps<T> | any;

function ContextDataTable<T>({
  columns,
  records,
  contextMenuItems,
  ...props
}: ContextDataTableProps<T>) {
  const [opened, setOpened] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [activeRow, setActiveRow] = useState<T | null>(null);

  const MENU_WIDTH = 200;
  const MENU_HEIGHT = 180;

  const getSafePosition = (x: number, y: number) => {
    const padding = 8;
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    return {
      left: Math.min(x, vw - MENU_WIDTH - padding),
      top: Math.min(y, vh - MENU_HEIGHT - padding),
    };
  };

  return (
    <Box pos="relative">
      <DataTable
        {...props}
        columns={columns}
        records={records}
        onRowContextMenu={({ event, record }) => {
          event.preventDefault();
          setActiveRow(record);
          const pos = getSafePosition(event.clientX, event.clientY);
          setPosition({ x: pos.left, y: pos.top });
          setOpened(true);
        }}
      />

      {contextMenuItems && activeRow && (
        <Menu opened={opened} onClose={() => setOpened(false)} withinPortal>
          <Menu.Dropdown
            style={{
              position: "fixed",
              top: position.y,
              left: position.x,
              zIndex: 9999,
              borderRadius: 8,
              width: 200,
            }}
          >
            {contextMenuItems(activeRow).map((item, idx) => (
              <Menu.Item
                key={idx}
                leftSection={item.icon}
                color={item.color}
                onClick={() => {
                  item.onClick(activeRow);
                  setOpened(false);
                }}
              >
                {item.label}
              </Menu.Item>
            ))}
          </Menu.Dropdown>
        </Menu>
      )}
    </Box>
  );
}

export default ContextDataTable;
