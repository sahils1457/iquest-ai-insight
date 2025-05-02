
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Software Engineer, hired at Google",
    content: "iQuest AI helped me prepare for my technical interviews like nothing else. The AI feedback was spot-on and I felt much more confident during my actual interviews.",
    avatar: "SJ"
  },
  {
    name: "Michael Chen",
    role: "Product Manager, hired at Microsoft",
    content: "The industry-specific questions were exactly what I needed. I was asked several of the same questions in my real interviews that I had practiced with iQuest.",
    avatar: "MC"
  },
  {
    name: "Emily Rodriguez",
    role: "UX Designer, hired at Adobe",
    content: "The video interview practice was a game-changer for me. Being able to see myself answering questions helped me improve my presentation significantly.",
    avatar: "ER"
  },
  {
    name: "David Kim",
    role: "Data Scientist, hired at Amazon",
    content: "As someone who gets nervous during interviews, iQuest AI gave me the confidence I needed. The practice sessions were realistic and the feedback was invaluable.",
    avatar: "DK"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <Avatar className="h-10 w-10 mr-4">
                  <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 italic">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
