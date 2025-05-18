import React, { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Eye, Trash2 } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { getAllLeads, deleteLead } from "@/lib/firebaseUtils";
import type { Lead } from "@/lib/firebaseUtils";
import { format } from 'date-fns';

const LeadsDashboard = () => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [showLeadDialog, setShowLeadDialog] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = async () => {
    try {
      const fetchedLeads = await getAllLeads();
      setLeads(fetchedLeads);
    } catch (error) {
      console.error('Error fetching leads:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to load leads. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteLead = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this lead?')) return;

    const originalLeads = [...leads];
    setLeads(prev => prev.filter(lead => lead.id !== id));

    try {
      await deleteLead(id);
      toast({
        title: "Lead Deleted",
        description: "Lead has been removed successfully.",
      });
    } catch (error) {
      console.error('Error deleting lead:', error);
      setLeads(originalLeads);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to delete lead. Please try again.",
      });
    }
  };

  const handleViewLead = (lead: Lead) => {
    setSelectedLead(lead);
    setShowLeadDialog(true);
  };

  if (isLoading) {
    return (
      <div className="rounded-md border p-8">
        <div className="flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#FFD700]"></div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {leads.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-8">
                  No leads found.
                </TableCell>
              </TableRow>
            ) : (
              leads.map((lead) => (
                <TableRow key={lead.id}>
                  <TableCell className="font-medium">{lead.name}</TableCell>
                  <TableCell>{lead.email}</TableCell>
                  <TableCell>{format(lead.createdAt, 'MMM dd, yyyy')}</TableCell>
                  <TableCell>
                    {lead.appointmentDate ? (
                      <span className="text-green-600">Scheduled</span>
                    ) : (
                      <span className="text-yellow-600">Pending</span>
                    )}
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleViewLead(lead)}
                        className="hover:bg-secondary"
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDeleteLead(lead.id!)}
                        className="hover:bg-destructive/10 hover:text-destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      <Dialog open={showLeadDialog} onOpenChange={setShowLeadDialog}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Lead Details</DialogTitle>
            <DialogDescription>
              Detailed information about the lead
            </DialogDescription>
          </DialogHeader>
          
          {selectedLead && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-1">Name</h4>
                  <p>{selectedLead.name}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <p>{selectedLead.email}</p>
                </div>
                <div className="col-span-2">
                  <h4 className="font-semibold mb-1">Initial Inquiry</h4>
                  <p className="whitespace-pre-wrap">{selectedLead.inquiry}</p>
                </div>
                {selectedLead.followUpAnswers && Object.keys(selectedLead.followUpAnswers).length > 0 && (
                  <div className="col-span-2">
                    <h4 className="font-semibold mb-2">Follow-up Responses</h4>
                    <div className="space-y-2">
                      {Object.entries(selectedLead.followUpAnswers).map(([question, answer], index) => (
                        <div key={index} className="bg-secondary/50 p-3 rounded-md">
                          <p className="font-medium text-sm mb-1">{question}</p>
                          <p className="text-sm">{answer}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {selectedLead.appointmentDate && (
                  <div className="col-span-2">
                    <h4 className="font-semibold mb-1">Appointment Scheduled</h4>
                    <p>{format(selectedLead.appointmentDate, 'MMMM dd, yyyy hh:mm a')}</p>
                  </div>
                )}
                <div className="col-span-2">
                  <h4 className="font-semibold mb-1">Submission Date</h4>
                  <p>{format(selectedLead.createdAt, 'MMMM dd, yyyy hh:mm a')}</p>
                </div>
              </div>

              <div className="flex justify-end gap-2 mt-4">
                <DialogClose asChild>
                  <Button variant="outline">Close</Button>
                </DialogClose>
                <Button
                  variant="destructive"
                  onClick={() => {
                    handleDeleteLead(selectedLead.id!);
                    setShowLeadDialog(false);
                  }}
                >
                  Delete Lead
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default LeadsDashboard;