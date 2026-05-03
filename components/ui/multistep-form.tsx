"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

const steps = [
  { id: "personal", title: "Personal Info" },
  { id: "professional", title: "Professional" },
  { id: "goals", title: "Website Goals" },
  { id: "design", title: "Design" },
  { id: "budget", title: "Budget" },
  { id: "requirements", title: "Requirements" },
];

interface FormData {
  name: string;
  email: string;
  company: string;
  profession: string;
  experience: string;
  industry: string;
  primaryGoal: string;
  targetAudience: string;
  contentTypes: string[];
  colorPreference: string;
  stylePreference: string;
  inspirations: string;
  budget: string;
  timeline: string;
  features: string[];
  additionalInfo: string;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const contentVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, x: -50, transition: { duration: 0.2 } },
};

const OnboardingForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    profession: "",
    experience: "",
    industry: "",
    primaryGoal: "",
    targetAudience: "",
    contentTypes: [],
    colorPreference: "",
    stylePreference: "",
    inspirations: "",
    budget: "",
    timeline: "",
    features: [],
    additionalInfo: "",
  });

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleFeature = (feature: string) => {
    setFormData((prev) => {
      const features = [...prev.features];
      if (features.includes(feature)) {
        return { ...prev, features: features.filter((f) => f !== feature) };
      } else {
        return { ...prev, features: [...features, feature] };
      }
    });
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    try {
      // NOTE: Replace YOUR_ACCESS_KEY_HERE with your Web3Forms access key
      // Get it from https://web3forms.com/ by submitting pramodn276@gmail.com
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "YOUR_ACCESS_KEY_HERE", 
          subject: `New Client Onboarding: ${formData.name}`,
          from_name: formData.name,
          replyto: formData.email,
          message: `
            Name: ${formData.name}
            Email: ${formData.email}
            Company: ${formData.company || "N/A"}
            Profession: ${formData.profession}
            Industry: ${formData.industry}
            Goal: ${formData.primaryGoal}
            Target Audience: ${formData.targetAudience}
            Style: ${formData.stylePreference}
            Inspirations: ${formData.inspirations}
            Budget: ${formData.budget}
            Timeline: ${formData.timeline}
            Features Needed: ${formData.features.join(", ") || "None selected"}
            Additional Info: ${formData.additionalInfo}
          `,
        }),
      });

      const result = await res.json();
      
      if (result.success) {
        toast.success("Form submitted successfully! We'll be in touch soon.");
        // Optional: Reset form or go to a success screen
      } else {
        toast.error("Failed to submit form. Please try again.");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Check if step is valid for next button
  const isStepValid = () => {
    switch (currentStep) {
      case 0:
        return formData.name.trim() !== "" && formData.email.trim() !== "";
      case 1:
        return formData.profession.trim() !== "" && formData.industry !== "";
      case 2:
        return formData.primaryGoal !== "";
      case 3:
        return formData.stylePreference !== "";
      case 4:
        return formData.budget !== "" && formData.timeline !== "";
      default:
        return true;
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto py-12 px-4 z-10 relative">
      {/* Progress indicator */}
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-between mb-2">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              whileHover={{ scale: 1.1 }}
            >
              <motion.div
                className={cn(
                  "w-4 h-4 rounded-full cursor-pointer transition-colors duration-300",
                  index < currentStep
                    ? "bg-cyan-500"
                    : index === currentStep
                      ? "bg-cyan-500 ring-4 ring-cyan-500/20"
                      : "bg-white/10",
                )}
                onClick={() => {
                  if (index <= currentStep) {
                    setCurrentStep(index);
                  }
                }}
                whileTap={{ scale: 0.95 }}
              />
              <motion.span
                className={cn(
                  "text-xs mt-1.5 hidden sm:block",
                  index === currentStep
                    ? "text-cyan-500 font-medium"
                    : "text-gray-500",
                )}
              >
                {step.title}
              </motion.span>
            </motion.div>
          ))}
        </div>
        <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden mt-2">
          <motion.div
            className="h-full bg-gradient-to-r from-blue-500 to-cyan-500"
            initial={{ width: 0 }}
            animate={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </motion.div>

      {/* Form card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card className="border-white/10 shadow-2xl rounded-3xl overflow-hidden bg-black/40 backdrop-blur-xl">
          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={contentVariants}
              >
                {/* Step 1: Personal Info */}
                {currentStep === 0 && (
                  <>
                    <CardHeader>
                      <CardTitle className="text-white">Tell us about yourself</CardTitle>
                      <CardDescription className="text-gray-400">
                        Let&apos;s start with some basic information
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <motion.div variants={fadeInUp} className="space-y-2">
                        <Label htmlFor="name" className="text-gray-300">Full Name</Label>
                        <Input
                          id="name"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={(e) =>
                            updateFormData("name", e.target.value)
                          }
                          className="bg-white/5 border-white/10 text-white transition-all duration-300 focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500"
                        />
                      </motion.div>
                      <motion.div variants={fadeInUp} className="space-y-2">
                        <Label htmlFor="email" className="text-gray-300">Email Address</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={(e) =>
                            updateFormData("email", e.target.value)
                          }
                          className="bg-white/5 border-white/10 text-white transition-all duration-300 focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500"
                        />
                      </motion.div>
                      <motion.div variants={fadeInUp} className="space-y-2">
                        <Label htmlFor="company" className="text-gray-300">
                          Company/Organization (Optional)
                        </Label>
                        <Input
                          id="company"
                          placeholder="Your Company"
                          value={formData.company}
                          onChange={(e) =>
                            updateFormData("company", e.target.value)
                          }
                          className="bg-white/5 border-white/10 text-white transition-all duration-300 focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500"
                        />
                      </motion.div>
                    </CardContent>
                  </>
                )}

                {/* Step 2: Professional Background */}
                {currentStep === 1 && (
                  <>
                    <CardHeader>
                      <CardTitle className="text-white">Professional Background</CardTitle>
                      <CardDescription className="text-gray-400">
                        Tell us about your professional experience
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <motion.div variants={fadeInUp} className="space-y-2">
                        <Label htmlFor="profession" className="text-gray-300">
                          What&apos;s your profession?
                        </Label>
                        <Input
                          id="profession"
                          placeholder="e.g. Designer, Developer, Marketer"
                          value={formData.profession}
                          onChange={(e) =>
                            updateFormData("profession", e.target.value)
                          }
                          className="bg-white/5 border-white/10 text-white transition-all duration-300 focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500"
                        />
                      </motion.div>

                      <motion.div variants={fadeInUp} className="space-y-2">
                        <Label htmlFor="industry" className="text-gray-300">
                          What industry do you work in?
                        </Label>
                        <Select
                          value={formData.industry}
                          onValueChange={(value) =>
                            updateFormData("industry", value)
                          }
                        >
                          <SelectTrigger
                            id="industry"
                            className="bg-white/5 border-white/10 text-white transition-all duration-300 focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500"
                          >
                            <SelectValue placeholder="Select an industry" />
                          </SelectTrigger>
                          <SelectContent className="bg-gray-900 border-white/10 text-white">
                            <SelectItem value="technology">Technology</SelectItem>
                            <SelectItem value="healthcare">Healthcare</SelectItem>
                            <SelectItem value="education">Education</SelectItem>
                            <SelectItem value="finance">Finance</SelectItem>
                            <SelectItem value="retail">Retail</SelectItem>
                            <SelectItem value="creative">Creative Arts</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </motion.div>
                    </CardContent>
                  </>
                )}

                {/* Step 3: Website Goals */}
                {currentStep === 2 && (
                  <>
                    <CardHeader>
                      <CardTitle className="text-white">Website Goals</CardTitle>
                      <CardDescription className="text-gray-400">
                        What are you trying to achieve with your website?
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <motion.div variants={fadeInUp} className="space-y-2">
                        <Label className="text-gray-300">
                          What&apos;s the primary goal of your website?
                        </Label>
                        <RadioGroup
                          value={formData.primaryGoal}
                          onValueChange={(value) =>
                            updateFormData("primaryGoal", value)
                          }
                          className="space-y-2"
                        >
                          {[
                            { value: "showcase", label: "Showcase portfolio/work" },
                            { value: "sell", label: "Sell products/services" },
                            { value: "generate-leads", label: "Generate leads/inquiries" },
                            { value: "provide-info", label: "Provide information" },
                            { value: "blog", label: "Blog/content publishing" },
                          ].map((goal, index) => (
                            <motion.div
                              key={goal.value}
                              className={cn(
                                "flex items-center space-x-2 rounded-md border border-white/10 p-3 cursor-pointer transition-colors",
                                formData.primaryGoal === goal.value ? "bg-cyan-500/10 border-cyan-500/50" : "hover:bg-white/5 bg-white/5"
                              )}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              transition={{ duration: 0.2 }}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{
                                opacity: 1,
                                x: 0,
                                transition: { delay: 0.1 * index, duration: 0.3 },
                              }}
                            >
                              <RadioGroupItem value={goal.value} id={`goal-${index + 1}`} className="border-cyan-500 text-cyan-500" />
                              <Label htmlFor={`goal-${index + 1}`} className="cursor-pointer w-full text-gray-200">
                                {goal.label}
                              </Label>
                            </motion.div>
                          ))}
                        </RadioGroup>
                      </motion.div>
                      <motion.div variants={fadeInUp} className="space-y-2">
                        <Label htmlFor="targetAudience" className="text-gray-300">
                          Who is your target audience?
                        </Label>
                        <Textarea
                          id="targetAudience"
                          placeholder="Describe your ideal visitors/customers"
                          value={formData.targetAudience}
                          onChange={(e) => updateFormData("targetAudience", e.target.value)}
                          className="min-h-[80px] bg-white/5 border-white/10 text-white transition-all duration-300 focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500"
                        />
                      </motion.div>
                    </CardContent>
                  </>
                )}

                {/* Step 4: Design Preferences */}
                {currentStep === 3 && (
                  <>
                    <CardHeader>
                      <CardTitle className="text-white">Design Preferences</CardTitle>
                      <CardDescription className="text-gray-400">
                        Tell us about your aesthetic preferences
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <motion.div variants={fadeInUp} className="space-y-2">
                        <Label className="text-gray-300">What style do you prefer for your website?</Label>
                        <RadioGroup
                          value={formData.stylePreference}
                          onValueChange={(value) => updateFormData("stylePreference", value)}
                          className="space-y-2"
                        >
                          {[
                            { value: "modern", label: "Modern & Sleek" },
                            { value: "minimalist", label: "Minimalist" },
                            { value: "bold", label: "Bold & Creative" },
                            { value: "corporate", label: "Corporate & Professional" },
                          ].map((style, index) => (
                            <motion.div
                              key={style.value}
                              className={cn(
                                "flex items-center space-x-2 rounded-md border border-white/10 p-3 cursor-pointer transition-colors",
                                formData.stylePreference === style.value ? "bg-cyan-500/10 border-cyan-500/50" : "hover:bg-white/5 bg-white/5"
                              )}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              transition={{ duration: 0.2 }}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{
                                opacity: 1,
                                y: 0,
                                transition: { delay: 0.1 * index, duration: 0.3 },
                              }}
                            >
                              <RadioGroupItem value={style.value} id={`style-${index + 1}`} className="border-cyan-500 text-cyan-500" />
                              <Label htmlFor={`style-${index + 1}`} className="cursor-pointer w-full text-gray-200">
                                {style.label}
                              </Label>
                            </motion.div>
                          ))}
                        </RadioGroup>
                      </motion.div>
                      <motion.div variants={fadeInUp} className="space-y-2">
                        <Label htmlFor="inspirations" className="text-gray-300">
                          Any websites you like for inspiration?
                        </Label>
                        <Textarea
                          id="inspirations"
                          placeholder="List websites you admire or want to emulate"
                          value={formData.inspirations}
                          onChange={(e) => updateFormData("inspirations", e.target.value)}
                          className="min-h-[80px] bg-white/5 border-white/10 text-white transition-all duration-300 focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500"
                        />
                      </motion.div>
                    </CardContent>
                  </>
                )}

                {/* Step 5: Budget & Timeline */}
                {currentStep === 4 && (
                  <>
                    <CardHeader>
                      <CardTitle className="text-white">Budget & Timeline</CardTitle>
                      <CardDescription className="text-gray-400">
                        Let&apos;s talk about your investment and timeline
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <motion.div variants={fadeInUp} className="space-y-2">
                        <Label htmlFor="budget" className="text-gray-300">What&apos;s your budget range? (USD)</Label>
                        <Select
                          value={formData.budget}
                          onValueChange={(value) => updateFormData("budget", value)}
                        >
                          <SelectTrigger
                            id="budget"
                            className="bg-white/5 border-white/10 text-white transition-all duration-300 focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500"
                          >
                            <SelectValue placeholder="Select your budget" />
                          </SelectTrigger>
                          <SelectContent className="bg-gray-900 border-white/10 text-white">
                            <SelectItem value="under-1000">Under $1,000</SelectItem>
                            <SelectItem value="1000-3000">$1,000 - $3,000</SelectItem>
                            <SelectItem value="3000-5000">$3,000 - $5,000</SelectItem>
                            <SelectItem value="5000-10000">$5,000 - $10,000</SelectItem>
                            <SelectItem value="over-10000">Over $10,000</SelectItem>
                          </SelectContent>
                        </Select>
                      </motion.div>
                      <motion.div variants={fadeInUp} className="space-y-2">
                        <Label className="text-gray-300">What&apos;s your expected timeline?</Label>
                        <RadioGroup
                          value={formData.timeline}
                          onValueChange={(value) => updateFormData("timeline", value)}
                          className="space-y-2"
                        >
                          {[
                            { value: "asap", label: "ASAP" },
                            { value: "1-month", label: "Within 1 month" },
                            { value: "3-months", label: "1-3 months" },
                            { value: "flexible", label: "Flexible" },
                          ].map((time, index) => (
                            <motion.div
                              key={time.value}
                              className={cn(
                                "flex items-center space-x-2 rounded-md border border-white/10 p-3 cursor-pointer transition-colors",
                                formData.timeline === time.value ? "bg-cyan-500/10 border-cyan-500/50" : "hover:bg-white/5 bg-white/5"
                              )}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              transition={{ duration: 0.2 }}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{
                                opacity: 1,
                                x: 0,
                                transition: { delay: 0.1 * index, duration: 0.3 },
                              }}
                            >
                              <RadioGroupItem value={time.value} id={`time-${index + 1}`} className="border-cyan-500 text-cyan-500" />
                              <Label htmlFor={`time-${index + 1}`} className="cursor-pointer w-full text-gray-200">
                                {time.label}
                              </Label>
                            </motion.div>
                          ))}
                        </RadioGroup>
                      </motion.div>
                    </CardContent>
                  </>
                )}

                {/* Step 6: Additional Requirements */}
                {currentStep === 5 && (
                  <>
                    <CardHeader>
                      <CardTitle className="text-white">Additional Requirements</CardTitle>
                      <CardDescription className="text-gray-400">
                        Any other specific needs for your website?
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <motion.div variants={fadeInUp} className="space-y-2">
                        <Label className="text-gray-300">Which features do you need?</Label>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {[
                            "Contact Form",
                            "Blog/News",
                            "E-commerce",
                            "User Accounts",
                            "Search Functionality",
                            "Social Media Integration",
                            "Newsletter Signup",
                            "Analytics",
                          ].map((feature, index) => (
                            <motion.div
                              key={feature}
                              className={cn(
                                "flex items-center space-x-2 rounded-md border border-white/10 p-3 cursor-pointer transition-colors",
                                formData.features.includes(feature.toLowerCase()) ? "bg-cyan-500/10 border-cyan-500/50" : "hover:bg-white/5 bg-white/5"
                              )}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              transition={{ duration: 0.2 }}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{
                                opacity: 1,
                                y: 0,
                                transition: { delay: 0.05 * index, duration: 0.3 },
                              }}
                              onClick={() => toggleFeature(feature.toLowerCase())}
                            >
                              <Checkbox
                                id={`feature-${feature}`}
                                checked={formData.features.includes(feature.toLowerCase())}
                                onCheckedChange={() => toggleFeature(feature.toLowerCase())}
                                className="border-white/50 data-[state=checked]:bg-cyan-500 data-[state=checked]:border-cyan-500"
                              />
                              <Label htmlFor={`feature-${feature}`} className="cursor-pointer w-full text-gray-200">
                                {feature}
                              </Label>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                      <motion.div variants={fadeInUp} className="space-y-2">
                        <Label htmlFor="additionalInfo" className="text-gray-300">
                          Anything else we should know?
                        </Label>
                        <Textarea
                          id="additionalInfo"
                          placeholder="Any additional requirements or information"
                          value={formData.additionalInfo}
                          onChange={(e) => updateFormData("additionalInfo", e.target.value)}
                          className="min-h-[80px] bg-white/5 border-white/10 text-white transition-all duration-300 focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500"
                        />
                      </motion.div>
                    </CardContent>
                  </>
                )}
              </motion.div>
            </AnimatePresence>

            <CardFooter className="flex justify-between pt-6 pb-4 border-t border-white/10">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  type="button"
                  variant="outline"
                  onClick={prevStep}
                  disabled={currentStep === 0}
                  className="flex items-center gap-1 transition-all duration-300 rounded-xl border-white/20 bg-transparent text-white hover:bg-white/10"
                >
                  <ChevronLeft className="h-4 w-4" /> Back
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  type="button"
                  onClick={currentStep === steps.length - 1 ? handleSubmit : nextStep}
                  disabled={!isStepValid() || isSubmitting}
                  className="flex items-center gap-1 transition-all duration-300 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white border-0"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" /> Submitting...
                    </>
                  ) : (
                    <>
                      {currentStep === steps.length - 1 ? "Submit Request" : "Next"}
                      {currentStep === steps.length - 1 ? <Check className="h-4 w-4 ml-1" /> : <ChevronRight className="h-4 w-4 ml-1" />}
                    </>
                  )}
                </Button>
              </motion.div>
            </CardFooter>
          </div>
        </Card>
      </motion.div>

      {/* Step indicator */}
      <motion.div
        className="mt-4 text-center text-sm text-gray-500 font-medium"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Step {currentStep + 1} of {steps.length}: {steps[currentStep].title}
      </motion.div>
    </div>
  );
};

export default OnboardingForm;
