import React from "react";
import html2pdf from "html2pdf.js";
import { DocumentArrowDownIcon } from "@heroicons/react/24/outline";
import { Button } from "@nextui-org/react";
import { useReactToPrint } from "react-to-print";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function ProfileDownloadComponent() {
  // Function to convert the profile HTML to a PDF and download it
  const downloadPDF = async () => {
    try {
      // Fetch the HTML file content (assuming the file is served on your server)
      const response = await fetch("/assets/templates/template-4.html");
      const html = await response.text();

      // Create a new DOM element from the fetched HTML
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");
      const element = doc.body; // This contains the entire HTML content

      const currentDate = new Date();
      const formattedDate = currentDate
        .toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        })
        .replace(/\//g, "-");

      const options = {
        margin: 0.5,
        filename: `muhammad-arifin-habibi_web-developer_${formattedDate}.pdf`,
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 1.5 },
        jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
      };

      // Convert fetched HTML to PDF and trigger download
      html2pdf().from(element).set(options).save();
    } catch (error) {
      console.error("Error generating PDF: ", error);
    }
  };

  const formattedDate = new Date()
    .toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
    .replace(/\//g, "-");

  const handlePrint = useReactToPrint({
    content: () => document.querySelector("#printable"),
    documentTitle: `Muhammad Arifin Habibi - Web Developer - ${formattedDate}`,
    removeAfterPrint: true,
  });

  const handleDownload = () => {
    const input = document.querySelector("#printable");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 30;

      pdf.addImage(
        imgData,
        "PNG",
        imgX,
        imgY,
        imgWidth * ratio,
        imgHeight * ratio,
      );
      pdf.save("John_Doe_Resume.pdf");
    });
  };

  return (
    <>
      <div className="mt-4 flex flex-col items-start gap-2">
        <Button
          size="sm"
          variant="flat"
          color="primary"
          className="bg-gradient-to-br from-info to-dark text-light dark:from-primary dark:to-info dark:shadow-right-light"
          startContent={<DocumentArrowDownIcon width={24} />}
          onClick={handlePrint}
        >
          Resume
        </Button>
      </div>
    </>
  );
}

export default ProfileDownloadComponent;
