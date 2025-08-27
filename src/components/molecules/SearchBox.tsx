'use client';

import { useState } from 'react';
import { Search, MapPin, Car, Wrench, Check, ChevronsUpDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { cn } from '@/lib/utils';

interface SearchBoxProps {
  className?: string;
}

const cities = [
  { value: 'hanoi', label: 'Hà Nội' },
  { value: 'hochiminh', label: 'TP. Hồ Chí Minh' },
  { value: 'danang', label: 'Đà Nẵng' },
  { value: 'haiphong', label: 'Hải Phòng' },
  { value: 'cantho', label: 'Cần Thơ' },
  { value: 'binhduong', label: 'Bình Dương' },
  { value: 'dongnai', label: 'Đồng Nai' },
  { value: 'khanhhoa', label: 'Khánh Hòa' },
];

const carBrands = [
  { value: 'toyota', label: 'Toyota' },
  { value: 'honda', label: 'Honda' },
  { value: 'ford', label: 'Ford' },
  { value: 'hyundai', label: 'Hyundai' },
  { value: 'kia', label: 'Kia' },
  { value: 'mazda', label: 'Mazda' },
  { value: 'nissan', label: 'Nissan' },
  { value: 'bmw', label: 'BMW' },
  { value: 'mercedes', label: 'Mercedes-Benz' },
  { value: 'audi', label: 'Audi' },
  { value: 'lexus', label: 'Lexus' },
  { value: 'volkswagen', label: 'Volkswagen' },
];

const symptoms = [
  { value: 'engine', label: 'Động cơ không nổ' },
  { value: 'brake', label: 'Phanh không ăn' },
  { value: 'transmission', label: 'Hộp số có vấn đề' },
  { value: 'electrical', label: 'Hệ thống điện' },
  { value: 'ac', label: 'Điều hòa không mát' },
  { value: 'tire', label: 'Lốp xe bị mòn' },
  { value: 'battery', label: 'Ắc quy yếu' },
  { value: 'oil', label: 'Rò rỉ dầu nhớt' },
  { value: 'coolant', label: 'Rò rỉ nước làm mát' },
  { value: 'exhaust', label: 'Ống xả có tiếng lạ' },
];

export default function SearchBox({ className = '' }: SearchBoxProps) {
  const [selectedCity, setSelectedCity] = useState<string>('');
  const [selectedBrand, setSelectedBrand] = useState<string>('');
  const [selectedSymptom, setSelectedSymptom] = useState<string>('');
  
  // State for controlling popover open/close
  const [cityOpen, setCityOpen] = useState(false);
  const [brandOpen, setBrandOpen] = useState(false);
  const [symptomOpen, setSymptomOpen] = useState(false);

  const getDisplayText = (value: string, options: Array<{ value: string; label: string }>) => {
    const option = options.find(opt => opt.value === value);
    return option ? option.label : '';
  };

  return (
    <div className={cn(
      "flex flex-col md:flex-row items-center bg-black/80 backdrop-blur-sm border border-white/20 rounded-2xl max-w-3xl mx-auto gap-0 pr-2",
      className
    )}>
      {/* City Selection */}
      <Popover open={cityOpen} onOpenChange={setCityOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="ghost"
            role="combobox"
            aria-expanded={cityOpen}
            className="w-full md:w-[200px] h-16 px-4 text-left hover:bg-white/10 rounded-xl border-0 justify-between"
          >
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-white" />
              <div className="flex flex-col items-start">
                <span className="text-xs text-white/60">Thành phố</span>
                <span className="text-sm font-medium text-white truncate">
                  {selectedCity ? getDisplayText(selectedCity, cities) : 'Chọn thành phố'}
                </span>
              </div>
            </div>
            <ChevronsUpDown className="h-4 w-4 text-white/50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[300px] p-0" align="start">
          <Command>
            <CommandInput placeholder="Tìm thành phố..." />
            <CommandList>
              <CommandEmpty>Không tìm thấy thành phố.</CommandEmpty>
              <CommandGroup>
                {cities.map((city) => (
                  <CommandItem
                    key={city.value}
                    value={city.value}
                    onSelect={(currentValue) => {
                      setSelectedCity(currentValue === selectedCity ? "" : currentValue);
                      setCityOpen(false);
                    }}
                  >
                    {city.label}
                    <Check
                      className={cn(
                        "ml-auto h-4 w-4",
                        selectedCity === city.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>

      {/* Separator */}
      <div className="hidden md:block w-px h-8 bg-white/20 mx-2" />

      {/* Car Brand Selection */}
      <Popover open={brandOpen} onOpenChange={setBrandOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="ghost"
            role="combobox"
            aria-expanded={brandOpen}
            className="w-full md:w-[200px] h-16 px-4 text-left hover:bg-white/10 rounded-xl border-0 justify-between"
          >
            <div className="flex items-center gap-3">
              <Car className="h-5 w-5 text-white" />
              <div className="flex flex-col items-start">
                <span className="text-xs text-white/60">Hãng xe</span>
                <span className="text-sm font-medium text-white truncate">
                  {selectedBrand ? getDisplayText(selectedBrand, carBrands) : 'Chọn hãng xe'}
                </span>
              </div>
            </div>
            <ChevronsUpDown className="h-4 w-4 text-white/50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[300px] p-0" align="start">
          <Command>
            <CommandInput placeholder="Tìm hãng xe..." />
            <CommandList>
              <CommandEmpty>Không tìm thấy hãng xe.</CommandEmpty>
              <CommandGroup>
                {carBrands.map((brand) => (
                  <CommandItem
                    key={brand.value}
                    value={brand.value}
                    onSelect={(currentValue) => {
                      setSelectedBrand(currentValue === selectedBrand ? "" : currentValue);
                      setBrandOpen(false);
                    }}
                  >
                    {brand.label}
                    <Check
                      className={cn(
                        "ml-auto h-4 w-4",
                        selectedBrand === brand.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>

      {/* Separator */}
      <div className="hidden md:block w-px h-8 bg-white/20 mx-2" />

      {/* Symptom Selection */}
      <Popover open={symptomOpen} onOpenChange={setSymptomOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="ghost"
            role="combobox"
            aria-expanded={symptomOpen}
            className="w-full md:w-[200px] h-16 px-4 text-left hover:bg-white/10 rounded-xl border-0 justify-between"
          >
            <div className="flex items-center gap-3">
              <Wrench className="h-5 w-5 text-white" />
              <div className="flex flex-col items-start">
                <span className="text-xs text-white/60">Triệu chứng</span>
                <span className="text-sm font-medium text-white truncate">
                  {selectedSymptom ? getDisplayText(selectedSymptom, symptoms) : 'Chọn triệu chứng'}
                </span>
              </div>
            </div>
            <ChevronsUpDown className="h-4 w-4 text-white/50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[300px] p-0" align="start">
          <Command>
            <CommandInput placeholder="Tìm triệu chứng..." />
            <CommandList>
              <CommandEmpty>Không tìm thấy triệu chứng.</CommandEmpty>
              <CommandGroup>
                {symptoms.map((symptom) => (
                  <CommandItem
                    key={symptom.value}
                    value={symptom.value}
                    onSelect={(currentValue) => {
                      setSelectedSymptom(currentValue === selectedSymptom ? "" : currentValue);
                      setSymptomOpen(false);
                    }}
                  >
                    {symptom.label}
                    <Check
                      className={cn(
                        "ml-auto h-4 w-4",
                        selectedSymptom === symptom.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>

      {/* Search Button */}
      <Button
        size="icon"
        className="h-12 w-12 md:ml-2 bg-white/10 hover:bg-white/20 border-0 rounded-xl"
      >
        <Search className="h-5 w-5 text-white" />
      </Button>
    </div>
  );
}
