import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";



export function ProductSpecifications() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Product Specifications</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px]">Attribute</TableHead>
            <TableHead>Value</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">Weight</TableCell>
            <TableCell>2</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">SKU</TableCell>
            <TableCell>sku-id</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Categories</TableCell>
            <TableCell>Fruits Snaks Vegetables</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
