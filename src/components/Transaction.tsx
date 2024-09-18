// import {
//   Table,
//   TableBody,
//   TableCaption,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { FC } from "react";

// interface TransactionProps {
//   txLink: string;
//   amount: number;
//   status: string;
// }

// export const Transaction: FC<TransactionProps> = ({
//   txLink,
//   amount,
//   status,
// }) => {
//   const transactionId = txLink ? txLink.split("/tx/")[1].split("?")[0] : "";
//   return (
//     <div className="m-6">
//       <p className="text-xl">
//         {" "}
//         <u>transaction details</u>
//       </p>
//       <Table>
//         <TableHeader>
//           <TableRow>
//             <TableHead>status</TableHead>
//             <TableHead>transaction id</TableHead>
//             <TableHead>amount</TableHead>
//           </TableRow>
//         </TableHeader>

//         <TableBody>
//           <TableRow>
//             <TableCell className="font-medium">{status}</TableCell>
//             <TableCell>
//               {
//                 <a href={txLink} target="_blank" rel="noopener noreferrer">
//                   {transactionId}
//                 </a>
//               }
//             </TableCell>
//             <TableCell>{amount !== 0 ? amount : ""}</TableCell>
//           </TableRow>
//         </TableBody>
//       </Table>
//     </div>
//   );
// };
